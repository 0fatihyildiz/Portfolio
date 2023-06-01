export interface CompileClassOptions {
  /**
   * Trigger string
   * @default ':uno:'
   */
  trigger?: string

  /**
   * Prefix for compile class name
   * @default 'uno-'
   */
  classPrefix?: string

  /**
   * Hash function
   */
  hashFn?: (str: string) => string

  /**
   * Left unknown classes inside the string
   *
   * @default true
   */
  keepUnknown?: boolean

  /**
   * The layer name of generated rules
   */
  layer?: string
}

export default function hexToRgba(options: CompileClassOptions = {}) {
  const {
    keepUnknown = true,
  } = options
  const regex = /class="([^"]+)"/g

  return {
    name: 'hexToRgba',
    enforce: 'pre',
    async transform(s, _, { uno, tokens }) {
      const matches = [...s.original.matchAll(regex)]
      if (!matches.length)
        return
      const replacedHtml = s.original.replace(regex, (match, classes) => {
        const replacedClasses = classes.split(' ').map((className) => {
          if (className.startsWith('rgba-bg-')) {
            const color = className.replace('rgba-bg-', '#').substring(1)
            const rgbaColor = hexToRGBA(color, 1)
            return `bg-[${rgbaColor}]`
          }
          else if (className.startsWith('rgba-text-')) {
            const color = className.replace('rgba-text-', '#').substring(1)
            const opacityMatch = className.match(/\/(\d+(\.\d+)?)$/)
            const opacity = opacityMatch ? Number(opacityMatch[1]) : 1
            const rgbaColor = hexToRGBA(color, opacity)
            return `text-[${rgbaColor}]`
          }
          else if (className.startsWith('rgba-border-')) {
            const color = className.replace('rgba-border-', '#').substring(1)
            const rgbaColor = hexToRGBA(color, 1)
            return `border-[${rgbaColor}]`
          }
          else if (keepUnknown) {
            return className
          }
        })
        return match.replace(classes, replacedClasses.join(' '))
      })
    },
  }
}

function hexToRGBA(hex: string, alpha: number): string {
  hex = hex.replace('#', '')

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(char => char + char)
      .join('')
  }

  const bigint = parseInt(hex, 16)
  const red = (bigint >> 16) & 255
  const green = (bigint >> 8) & 255
  const blue = bigint & 255
  const rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`

  return rgba
}

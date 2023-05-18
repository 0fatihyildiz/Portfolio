import type { RouterConfig } from '@nuxt/schema'

function findHashPosition(hash: string): { el: string; behavior: ScrollBehavior; top: number } {
  const el = document.querySelector(hash)
  if (!el)
    return { el: hash, behavior: 'smooth', top: 0 }
  const top = parseFloat(getComputedStyle(el).scrollMarginTop) + 100

  return {
    el: hash,
    behavior: 'smooth',
    top,
  }
}

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp()

    if (savedPosition) {
      return new Promise((resolve) => {
        nuxtApp.hooks.hookOnce('page:finish', () => {
          setTimeout(() => resolve(savedPosition), 50)
        })
      })
    }

    if (to.hash) {
      return new Promise((resolve) => {
        if (to.path === from.path) {
          setTimeout(() => resolve(findHashPosition(to.hash)), 50)
        }
        else {
          nuxtApp.hooks.hookOnce('page:finish', () => {
            setTimeout(() => resolve(findHashPosition(to.hash)), 50)
          })
        }
      })
    }

    return { top: 0 }
  },
}

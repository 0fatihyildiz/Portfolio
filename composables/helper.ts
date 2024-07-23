async function useImageIsLoaded(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = document.createElement('img')

    img.onload = () => {
      resolve(true)
    }

    img.onerror = () => {
      resolve(false)
    }

    img.src = src
  })
}

export { useImageIsLoaded }

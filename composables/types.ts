interface Work {
  id: number
  name: string
  description: string
  image: string
  link: string
  review: {
    explain: string
    tags: string[]
  }
}

export { Work }

interface Work {
  id: number
  name: string
  description: string
  image: string
  link: string
  review: {
    explain: string
    tags: string[]
    comments: {
      avatar: string
      name: string
      job_title: string
      comment: string
    }[]
  }
}

export { Work }

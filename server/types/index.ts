export interface Repos {
    name: string,
    description: string,
    link: string,
    image: string,
    top_language: string
    stars: number
    forks: number
}

export interface PinnedRepos extends Repos {
    topics: string[]
}
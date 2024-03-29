export interface Repos {
    title: string,
    description: string,
    link: string,
    image: string,
    top_language: string
    stars: number
    forks: number
}

export interface PinnedRepos extends Repos {
[x: string]: any
    topisc: string[]
}
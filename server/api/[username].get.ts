import { parse } from 'muninn';
import { ofetch } from "ofetch";
import { Repos } from '../types';

const baseURL = 'https://github.com/'

const pinned_repository_config = {
    selector: '.js-pinned-items-reorder-list li',
    type: 'array',
    schema: {
        name: 'span.repo',
        description: 'p.pinned-item-desc.color-fg-muted.text-small.mt-2.mb-0',
        link: {
            selector: 'a.Link.mr-1.text-bold.wb-break-word',
            attr: 'href',
            transform: (value: string) => `https://github.com${value}`
        },
        image: {
            selector: 'a.Link.mr-1.text-bold.wb-break-word',
            attr: 'href',
            transform: (value: string) => `https://opengraph.githubassets.com/a${value}`
        },
        top_language: 'span[itemprop="programmingLanguage"]',
        stars: 'a[href$="stargazers"]',
        forks: 'a[href$="forks"]',
    }
};

const topics_config = {
    schema: {
        topics: '.topic-tag.topic-tag-link | array',
    }
}

async function getTopics(url: string) {
    const repo = await ofetch(url, {
        baseURL
    })

    if (!repo)
        throw createError({ statusCode: 400, statusMessage: "Repo not found." })

    // @ts-ignore
    return parse(repo, topics_config).topics
}

export default defineEventHandler(async (event) => {
    const username = getRouterParam(event, 'username')

    if (!username)
        throw createError({ statusCode: 400, statusMessage: "Invaild Username" })

    const profile = await ofetch(username, {
        baseURL
    })

    if (!profile)
        throw createError({ statusCode: 400, statusMessage: "Profile not found." })

    // @ts-ignore
    const data: Repos[] = parse(profile, pinned_repository_config)

    const enhancedData = await Promise.all(data.map(async (item) => {
        const stars = item.stars ? Number(item.stars) : 0
        const forks = item.forks ? Number(item.forks) : 0
        const topics = await getTopics(item.link)
        
        return {
            ...item,
            stars,
            forks,
            topics
        };
    }));

    return enhancedData;
})
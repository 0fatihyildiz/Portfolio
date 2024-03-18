interface Owner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
}

interface License {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
}

interface Repository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: Owner;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    stargazers_count: number;
    license: License;
    allow_forking: boolean;
    is_template: boolean;
    web_commit_signoff_required: boolean;
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
    topics: string[]
}

interface PinnedRepostories {
    name: string;
    repo: string;
    description: string;
    demo: string;
    language: {
        name: string;
        color: string;
    };
    stars: number;
    forks: number;
}


export type { Repository, Owner, License, PinnedRepostories }
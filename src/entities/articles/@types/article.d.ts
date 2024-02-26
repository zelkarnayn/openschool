export  interface IArticle{
    id?: number
    title: string
    body: string
    tags: string[]
    reactions: number
    userId: number
}

export interface IPosts {
    total: number
    skip: number
    limit: number
    posts: IArticle[]
}
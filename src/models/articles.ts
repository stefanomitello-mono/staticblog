export interface Post {
    title: string;
    uri: string;
    publishedOn: string;
    category: string;
    body: string;
}

export interface Feed {
    articles: Post[];
}
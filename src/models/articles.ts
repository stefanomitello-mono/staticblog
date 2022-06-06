export interface Article {
    title: string;
    uri: string;
    publishedOn: string;
    category: string;
    body: string;
}

export interface Articles {
    articles: Article[];
}
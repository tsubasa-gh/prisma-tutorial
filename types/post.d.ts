export type Post = {
    id: number;
    content: string;
    createdAt: string;
    author: {
        name: string;
    };
};
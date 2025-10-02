export interface User {
    id:number;
    name: string;
    email: string;
    address: {
        city: string;
    };
}

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}
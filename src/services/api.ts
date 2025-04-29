import type { User, Post, Comment } from "../types/type";

export async function fetchUsers(): Promise<User[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Error fetching users");
    return res.json();
}

export async function fetchPosts(): Promise<Post[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!res.ok) throw new Error("Error fetching posts");
    return res.json();
}

export async function fetchComments():Promise<Comment[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    if(!res.ok) throw new Error("Error fetching comments");
    return res.json();
}
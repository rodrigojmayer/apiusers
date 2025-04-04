import type { User } from "../types/user";

export async function fetchUsers(): Promise<User[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Error fetching users");
    return res.json();
}
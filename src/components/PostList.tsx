import { useEffect, useState, useMemo } from "react";
import { fetchPosts } from '../services/api';
import type { Post } from '../types/type';
import PostTable from './PostTable';
import PostModal from './PostModal';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-unsafe-function-type
function debounce(fn: Function, delay: number) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timer: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

export default function PostList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [filter, setFilter] = useState("");
    const [selected, setSelected] = useState<Post | null>(null);

    useEffect(() => {
        fetchPosts().then(setPosts).catch(console.error);
    }, []);

    const debouncedFilter = useMemo(
        () => debounce((value: string) => setFilter(value), 500),
        []
    );

    const filtered = posts.filter(p => 
        p.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <h1>Posts</h1>
            <input 
                placeholder="Filter by title"
                onChange={e => debouncedFilter(e.target.value)}
            />
            <PostTable posts={filtered} onSelect={setSelected}/>
            {selected && (
                <PostModal post={selected} onClose={() => setSelected(null)}/>
            )}
        </div>
    )
}
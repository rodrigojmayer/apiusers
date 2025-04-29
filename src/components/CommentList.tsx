import { useState, useEffect, useMemo } from 'react';
import { fetchComments } from '../services/api';
import type { Comment } from '../types/type';
import CommentTable from './CommentTable';
import CommentModal from './CommentModal';

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function debounce(fn: Function, delay: number) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timer: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    }
}

export default function CommentList() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [filter, setFilter] = useState("");
    const [selected, setSelected] = useState<Comment | null>(null);

    useEffect(() => {
        fetchComments().then(setComments).catch(console.error);
    }, []);

    const debouncedFilter = useMemo(
        () => debounce((value: string) => setFilter(value), 500),
        []
    );

    const filtered = comments.filter(c => 
        c.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <h1>Comments</h1>
            <input 
                placeholder="Filter by name"
                onChange={e => debouncedFilter(e.target.value)}
            />
            <CommentTable comments={filtered} onSelect={setSelected}/>
            {selected && (
                <CommentModal comment={selected} onClose={() => setSelected(null)}/>
            )}
        </div>
    )
}
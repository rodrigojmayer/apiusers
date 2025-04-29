import { useEffect, useState, useMemo } from "react";
import { fetchUsers } from "../services/api";
import type { User } from "../types/type";
import UserTable from "./UserTable";
import UserModal from "./UserModal";

// importamos debounce (puedes ponerlo en utils/debounce.ts)
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function debounce(fn: Function, delay: number) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timer: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [filter, setFilter] = useState("");
    const [selected, setSelected] = useState<User | null>(null);

    useEffect(() => {
        fetchUsers().then(setUsers).catch(console.error);
    }, []);
    
    const debouncedFilter = useMemo(
        () => debounce((value: string) => setFilter(value), 500),
        []
    );

    const filtered = users.filter(u => 
        u.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <h1>Users</h1>
            <input
                placeholder="Filter by name"
                onChange={e => debouncedFilter(e.target.value)}
            />
            <UserTable users={filtered} onSelect={setSelected} />
            {selected && (
                <UserModal user={selected} onClose={() => setSelected(null)} />
            )}
        </div>
    )
}
import type { User } from '../types/type';

interface Props {
    users: User[];
    onSelect: (user: User) => void;
}

export default function UserTable({ users, onSelect }: Props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th><th>Email</th><th>City</th><th></th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                        <td>
                            <button onClick={() => onSelect(user)}>Details</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
import type { User } from "../types/type";

interface Props {
    user: User;
    onClose: () => void;
}

export default function UserModal({ user, onClose }: Props) {
    return (
        <div style={{
            position: "fixed", top: 0, left: 0,right: 0, bottom: 0,
            background: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center"
        }}>
            <div style={{ background: "white", padding: "1rem", borderRadius: "8px" }}>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>City: {user.address.city}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}
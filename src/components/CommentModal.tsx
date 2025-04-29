import type { Comment } from '../types/type';

interface Props {
    comment: Comment;
    onClose: () => void;
}

export default function CommentModal({comment, onClose}: Props) {
    return (
        <div style = {{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center"
        }}>
            <div style = {{ background: "white", padding: "1rem", borderRadius: "8px" }}>
                <h2>{comment.name}</h2>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}
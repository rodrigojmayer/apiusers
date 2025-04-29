import type { Post } from '../types/type';

interface Props {
    post: Post;
    onClose: () => void;
}

export default function PostModal({ post, onClose }: Props) {
    return (
        <div style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center"
        }}>
            <div style={{ background: "white", padding: "1rem", borderRadius: "8px" }}>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}
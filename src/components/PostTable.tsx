import type { Post } from '../types/type';

interface Props {
   posts: Post[];
   onSelect: (post: Post) => void; 
}

export default function PostTable({ posts, onSelect }: Props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th><th>Body</th><th></th>
                </tr>
            </thead>
            <tbody>
                {posts.map(post => (
                    <tr key={post.id}>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td>
                            <button onClick={() => onSelect(post)}>Details</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
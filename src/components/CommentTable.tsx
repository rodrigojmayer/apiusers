import type { Comment } from '../types/type';

interface Props {
    comments: Comment[];
    onSelect: (comment: Comment) => void;
}

export default function CommentTable({comments, onSelect}: Props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th><th>Email</th><th>Body</th><th></th>
                </tr>
            </thead>
            <tbody>
                {comments.map(comment => (
                    <tr key={comment.id}>
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                        <td>{comment.body}</td>
                        <td>
                            <button onClick={() => onSelect(comment)}>Details</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
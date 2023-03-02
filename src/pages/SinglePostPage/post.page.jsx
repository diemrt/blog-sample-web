import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom"
import EditPost from "../../components/Posts/form/EditPost/EditPost.component";

export default function PostPage(){
    const {postId} = useParams();
    const post = useSelector(state => state.posts.find(post => post.id === postId))

    if(!post)
        return <Navigate to="/posts" />;

    return (
        <EditPost post={post} />
    )
}
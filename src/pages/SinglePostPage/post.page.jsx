import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom"
import Editor from "../../components/Posts/Editor/Editor.component";
import EditPost from "../../components/Posts/form/EditPost/EditPost.component";

export default function PostPage(){
    const {postId} = useParams();
    const post = useSelector(state => state.posts.find(post => post.id === postId));
    const postEditor = Editor(EditPost, {...{post, lockState: true}});

    if(!post)
        return <Navigate to="/posts" />;

    return postEditor;
}
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom"
import Editor from "../../components/Posts/Editor/Editor.component";
import EditPost from "../../components/Posts/form/EditPost/EditPost.component";
import { getPostById } from "../../redux/posts/posts.reducer";

export default function PostPage(){
    const {postId} = useParams();
    const post = useSelector(state => getPostById(state, postId));
    const postEditor = Editor(EditPost, {...{post, lockState: true}});

    if(!post)
        return <Navigate to="/posts" />;

    return postEditor;
}
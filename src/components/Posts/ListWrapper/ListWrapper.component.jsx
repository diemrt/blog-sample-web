import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, getAllPosts } from "../../../redux/posts/posts.reducer";
import RenderItems from "../../RenderItems/RenderItems.component";
import ShowOnCondition from "../../ShowOnCondition/ShowOnCondition.component";
import PostPreview from "../PostPreview/PostPreview.component";

export default function ListWrapper(props){    
    const dispatch = useDispatch();
    const posts = useSelector(getAllPosts);
    const postStatus = useSelector(state => state.posts.status)

    useEffect(() => {
        if(postStatus === 'idle'){
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch])


    const PostsPreview = RenderItems(posts, PostPreview);
    const list = ShowOnCondition(typeof posts !== "undefined", PostsPreview)
    return list;
}
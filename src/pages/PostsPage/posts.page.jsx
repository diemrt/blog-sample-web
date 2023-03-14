import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Editor from "../../components/Posts/Editor/Editor.component";
import AddPost from "../../components/Posts/form/AddPost/AddPost.component";
import ListWrapper from "../../components/Posts/ListWrapper/ListWrapper.component";
import { getAllPosts } from "../../redux/posts/posts.reducer";

export default function PostsPage(){
    const loggedUser = useSelector(state => state.firebase);
    const posts = useSelector(state => getAllPosts(state, loggedUser.userId));
    const postEditor = Editor(AddPost, {...{lockState: false}});
    return (
        <div className='flex flex-col'>
            <section className="flex flex-col">
                {postEditor}
                <ListWrapper posts={[...posts].reverse()} />
            </section>
            
        <Outlet />
        </div>
    )
}
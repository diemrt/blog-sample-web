import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import AddPost from "../../components/Posts/form/AddPost/AddPost.component";
import PostsList from "../../components/Posts/PostsList.component";

export default function PostsPage(){

    const posts = useSelector(state => state.posts)
    return (
        <div className='flex flex-col'>
            <section className="flex flex-col">
                <AddPost />
                <PostsList posts={[...posts].reverse()} />
            </section>
            
        <Outlet />
        </div>
    )
}
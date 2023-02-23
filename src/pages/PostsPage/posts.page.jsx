import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import AddPost from "../../components/Posts/form/AddPost/AddPost.component";
import PostsList from "../../components/Posts/PostsList.component";

export default function PostsPage(){

    const posts = useSelector(state => state.posts.data)
    return (
        <div className='flex flex-col p-4'>
            <header className='p-4 text-indigo-500 font-bold'><h1 className='text-2xl'>Blog sample web</h1></header>
            <section className="flex flex-col gap-4 w-80">
                <AddPost />
                <PostsList posts={posts} />
            </section>
            
        <Outlet />
        </div>
    )
}
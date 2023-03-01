import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import AddPost from "../../components/Posts/form/AddPost/AddPost.component";
import PostsList from "../../components/Posts/PostsList.component";

export default function PostsPage(){

    const posts = useSelector(state => state.posts)
    return (
        <div className='flex flex-col'>
            <header className='flex text-center flex-col gap-3 p-4 font-serif'>
                <h1 className='text-5xl font-black text-slate-800'>Tryme.</h1>
                <small className="text-xs text-slate-500">blog sample.</small>
            </header>
            <section className="flex flex-col gap-4">
                <AddPost />
                <PostsList posts={posts} />
            </section>
            
        <Outlet />
        </div>
    )
}
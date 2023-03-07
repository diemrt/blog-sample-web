import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import AddPost from "../../components/Posts/form/AddPost/AddPost.component";
import ListWrapper from "../../components/Posts/ListWrapper/ListWrapper.component";

export default function PostsPage(){

    const posts = useSelector(state => state.posts)
    return (
        <div className='flex flex-col'>
            <section className="flex flex-col">
                <AddPost />
                <ListWrapper posts={[...posts].reverse()} />
            </section>
            
        <Outlet />
        </div>
    )
}
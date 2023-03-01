import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom"

export default function PostPage(){
    const {postId} = useParams();
    const post = useSelector(state => state.posts.find(post => post.id === postId))

    if(!post){
    return (
        <section>
        <h2>Post not found!</h2>
        </section>
    )
    }

    return (
        <div className='flex flex-col'>
            <section>
                <article className="flex flex-col">
                    <h2>{post.title}</h2>
                    <p className="post-content">{post.description}</p>
                </article>
            </section>
        <Outlet />
        </div>
    )
}
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom"

export default function PostPage(){
    const {postId} = useParams();
    const post = useSelector(state => state.posts.find(post => post.id === postId))

    if(!post)
        return <Navigate to="/posts" />;

    return (
        <section className='flex flex-col p-10 gap-4'>
            <article className="flex flex-col items-center gap-10">
                <h2 className="font-serif text-3xl">{post.title}</h2>
                {typeof post.cover !== "undefined" ? (<LazyLoadImage className="h-60 object-cover border-2 border-slate-900" alt={post.id} src={`/images/${post.cover}.jpg`} placeholderSrc={`/images/placeholder_${post.cover}.jpg`} />) : null}
                <p className="post-content">{post.description}</p>
            </article>
        </section>
    )
}
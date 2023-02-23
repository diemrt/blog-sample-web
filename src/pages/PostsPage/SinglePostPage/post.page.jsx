import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

export default function PostPage(){
    const {postId} = useParams();
    const post = useSelector(state => state.posts.data.find(post => post.id === parseInt(postId)))

    if(!post){
    return (
        <section>
        <h2>Post not found!</h2>
        </section>
    )
    }

    return (
        <section>
            <article className="flex flex-col">
                <h2>{post.title}</h2>
                <p className="post-content">{post.description}</p>
            </article>
        </section>
    )
}
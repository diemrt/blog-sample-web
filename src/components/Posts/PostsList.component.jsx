import { Link } from "react-router-dom";

export default function PostsList(props){

    if(typeof props !== "undefined") {
        return props.posts.map(post => (
            <Link key={post.id} to={`post/${post.id}`}>
                <div className="flex flex-col p-3 rounded-xl border-slate-200 border-2">
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    <small>Data: {post.insertDate}</small>
                </div>
            </Link>
        ))
    }
}
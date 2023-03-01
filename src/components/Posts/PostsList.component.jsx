import { Link } from "react-router-dom";

export default function PostsList(props){

    if(typeof props !== "undefined") {
        return props.posts.map(post => (
            <Link key={post.id} to={`post/${post.id}`}>
                <div className="flex flex-col items-center p-10 gap-4 border-slate-900 border-t-2">
                    <h1 className="font-sans text-sm font-extrabold w-full">_ READ</h1>
                    {typeof post.cover !== "undefined" ? (<img className="w-60 h-60 object-cover border-2 border-slate-900" alt={post.id} src={post.cover}></img>) : null}
                    <h2 className="font-serif text-3xl hover:underline hover:underline-offset-1">{post.title}</h2>
                    {typeof post.cover === "undefined" ? (<p className="text-sm">{`${post.description.slice(0,128)}...`}</p>) : null}
                </div>
            </Link>
        ))
    }
}
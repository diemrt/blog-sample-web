export default function PostsListComponent(props){

    if(typeof props !== "undefined") {
        return props.posts.map(post => (
            <div key={post.id} className="flex flex-col p-3 rounded-xl border-slate-200 border-2">
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                <small>Data: {post.insertDate}</small>
            </div>
        ))
    }
}
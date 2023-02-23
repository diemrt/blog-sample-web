import { useSelector } from "react-redux";
import AddPost from "../../components/Posts/form/AddPost/AddPost.component";
import PostsListComponent from "../../components/Posts/PostsList.component";

export default function PostsPage(){

    const posts = useSelector(state => state.posts)
    return (
        <section className="flex flex-col gap-4 w-80">
            <AddPost />
            <PostsListComponent posts={posts} />
        </section>
    )
}
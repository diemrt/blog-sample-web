import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Editor from "../../components/Posts/Editor/Editor.component";
import AddPost from "../../components/Posts/form/AddPost/AddPost.component";
import ListWrapper from "../../components/Posts/ListWrapper/ListWrapper.component";
import { fetchPosts, getAllPosts } from "../../redux/posts/posts.reducer";

export default function PostsPage(){
    const postEditor = Editor(AddPost, {...{lockState: false}});
    return (
        <div className='flex flex-col'>
            <section className="flex flex-col">
                {postEditor}
                <ListWrapper />
            </section>
            
        <Outlet />
        </div>
    )
}
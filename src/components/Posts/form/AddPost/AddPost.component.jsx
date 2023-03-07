import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "../../../../redux/posts/posts.reducer";
import PostDescription from "../PostDescription/PostDescription.components";
import PostTitle from "../PostTitle/PostTitle.component";

export default function AddPost() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const onTitleChange = (e) => setTitle(e.target.value);
    const onDescriptionChange = (e) => setDescription(e.target.value);

    const dispatch = useDispatch();
    const onSavePostClicked = () => {
        if(title && description){
            dispatch(postAdded(title, description));
            setTitle('')
            setDescription('')
        }
    }

    return (
        <section className="flex flex-col p-10 gap-4 border-slate-900">
            <h1 className="font-sans text-sm font-extrabold">_ SCRIVI</h1>
            <form className="flex flex-col items-center gap-4">
                <PostTitle {...{title, onTitleChange, isLocked: false}} />
                <PostDescription {...{description, onDescriptionChange, isLocked: false}} />
                <button type="button" className="flex flex-row items-center gap-2 p-2 pr-6 pl-6 border-2 border-slate-900 hover:bg-slate-900 hover:text-white active:translate-y-1 font-sans font-bold text-sm w-fit" onClick={onSavePostClicked}>
                    SALVA
                    <span className="material-symbols-outlined">
                        arrow_right_alt
                    </span>
                </button>
            </form>
        </section>
    )
}
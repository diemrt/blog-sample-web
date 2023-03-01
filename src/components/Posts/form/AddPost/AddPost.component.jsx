import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "../../../../redux/posts/posts.reducer";

export default function AddPost() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const onTitleChange = (e) => setTitle(e.target.value);
    const onDescriptionChange = (e) => setDescription(e.target.value);

    const dispatch = useDispatch();
    const onSavePostClicked = () => {
        if(title && description){
            dispatch(postAdded({
                id: nanoid(),
                title,
                description,
                insertDate: "Oggi"
            }))

            setTitle('')
            setDescription('')
        }
    }

    return (
        <section className="flex flex-col border-t-2 border-b-2 p-10 gap-4 border-slate-900">
            <h1 className="font-sans text-sm font-extrabold">_ WRITE</h1>
            <form className="flex flex-col items-center gap-4">
                <input className="text-xl font-bold w-full text-left" type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChange} placeholder="Title" />
                <textarea className="w-full text-left" id="postDescription" name="postDescription" value={description} onChange={onDescriptionChange} placeholder="Write something that insipire" />
                <button type="button" className="flex flex-row items-center gap-2 p-2 pr-6 pl-6 bg-slate-800 hover:bg-slate-900 font-sans text-sm text-white rounded-full w-fit" onClick={onSavePostClicked}>
                    SALVA
                    <span className="material-symbols-outlined">
                        arrow_right_alt
                    </span>
                </button>
            </form>
        </section>
    )
}
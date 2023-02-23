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
                title,
                description,
                insertDate: "Oggi"
            }))

            setTitle('')
            setDescription('')
        }
    }

    return (
        <section className="flex flex-col p-4 bg-slate-100">
            <h1 className="text-indigo-500">Aggiungi un post</h1>
            <form>
                <label htmlFor="postTitle" className="flex flex-col p-2">
                    Titolo:
                    <input className="border-2 rounded-xl p-2" type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChange} />
                </label>
                <label htmlFor="postDescription" className="flex flex-col p-2">
                    Descrizione:
                    <textarea className="border-2 rounded-xl p-2" id="postDescription" name="postDescription" value={description} onChange={onDescriptionChange} />
                </label>
                <button type="button" className="p-2 bg-indigo-500 text-white hover:bg-indigo-600 rounded-md w-full" onClick={onSavePostClicked}>Salva</button>
            </form>
        </section>
    )
}
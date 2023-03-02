import autosize from "autosize";
import { useEffect, useRef, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import { postEdited } from "../../../../redux/posts/posts.reducer";

export default function EditPost(props){
    const [title, setTitle] = useState(props?.post?.title);
    const [description, setDescription] = useState(props?.post?.description);
    const [isReading, setIsReading] = useState(true);
    const onTitleChange = (e) => setTitle(e.target.value);
    const onDescriptionChange = (e) => setDescription(e.target.value);
    const onPageModeChange = () => {
        if(!isReading){
            editPost();
        }
        setIsReading(!isReading);
    };
    const titleRef = useRef(null);

    const dispatch = useDispatch();
    const editPost = () => {
        if(title && description)
            dispatch(postEdited(props.post?.id, title, description));
    }

    useEffect(() => {
        autosize(document.querySelectorAll('textarea'));
        if (!isReading) {
            titleRef.current.focus();
        }
    }, [isReading]);

    return (
        <div className="flex flex-row justify-end p-5">
            <button title={isReading ? "Modifica" : "Salva"} className="rotate-45 fixed h-12 w-12 sm:bottom-16 bottom-5 border-2 bg-pink-100 border-slate-900 hover:bg-slate-900 hover:text-white active:translate-y-1 items-center" onClick={onPageModeChange}>
                <span className="material-symbols-outlined -rotate-45">
                    {isReading ? "edit_note" : "check"}
                </span>
            </button>
            <section className='flex flex-col gap-4'>
                <article className="flex flex-col items-center p-5 pb-16 gap-10">
                    <textarea ref={titleRef} className="font-serif text-3xl bg-transparent text-left h-fit w-full" type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChange} placeholder="Titolo" disabled={isReading}/>
                    {typeof props.post.cover !== "undefined" ? (<LazyLoadImage className="h-60 object-cover border-2 border-slate-900" alt={props.post.id} src={`/images/${props.post.cover}.jpg`} placeholderSrc={`/images/placeholder_${props.post.cover}.jpg`} />) : null}
                    <textarea className="w-full bg-transparent text-left font-serif" id="postDescription" name="postDescription" value={description} onChange={onDescriptionChange} placeholder="Qualcosa che può ispirare" disabled={isReading}>{description}</textarea>
                </article>  
            </section>
        </div>
    );

}
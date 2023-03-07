import { useDispatch } from "react-redux";
import { postEdited } from "../../../../redux/posts/posts.reducer";
import ShowOnCondition from "../../../ShowOnCondition/ShowOnCondition.component";
import Cover from "../../Cover/Cover.component";
import PostDescription from "../PostDescription/PostDescription.components";
import PostTitle from "../PostTitle/PostTitle.component";

export default function EditPost(props){
    const {title, description, isLocked, setIsLocked, onTitleChange, onDescriptionChange, editorProps, onSave} = props;
    const PostCover = ShowOnCondition(typeof editorProps?.post.cover !== "undefined", Cover, editorProps?.post);
    const dispatch = useDispatch();
    const dispatchOnCondition = () => {
        if(title && description)
            dispatch(postEdited(editorProps.post?.id, title, description));
    }
    const editPost = () => {
        onSave(dispatchOnCondition)
        setIsLocked(!isLocked);
    };

    return (
        <div className="flex flex-row justify-end p-5">
            <button title={isLocked ? "Modifica" : "Salva"} className="rotate-45 fixed h-12 w-12 sm:bottom-16 bottom-5 border-2 bg-pink-100 border-slate-900 hover:bg-slate-900 hover:text-white active:translate-y-1 items-center" onClick={editPost}>
                <span className="material-symbols-outlined -rotate-45">
                    {isLocked ? "edit_note" : "check"}
                </span>
            </button>
            <section className='flex flex-col gap-4'>
                <article className="flex flex-col items-center p-5 pb-16 gap-10">
                    <PostTitle {...{title, onTitleChange, isLocked}} />
                    {PostCover}
                    <PostDescription {...{description, onDescriptionChange, isLocked}} />
                </article>  
            </section>
        </div>
    );

}
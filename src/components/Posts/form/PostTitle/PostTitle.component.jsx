import autosize from "autosize";
import { useEffect, useRef } from "react";

export default function PostTitle(props){
    const {title, onTitleChange, isLocked} = props;
    const titleRef = useRef(null);

    useEffect(() => {
        autosize(document.querySelectorAll('textarea'));
        if (!isLocked) {
            titleRef.current.focus();
        }
    }, [isLocked]);


    return (
        <textarea ref={titleRef} className="font-serif text-3xl bg-transparent text-left h-fit w-full" type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChange} placeholder="Titolo" disabled={isLocked}/>
    );
}
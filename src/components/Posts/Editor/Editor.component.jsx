import { useState } from "react";

export default function Editor(WrappedComponent, props){
    const [title, setTitle] = useState(props?.post?.title);
    const [description, setDescription] = useState(props?.post?.description);
    const [isLocked, setIsLocked] = useState(false);
    const onTitleChange = (e) => setTitle(e.target.value);
    const onDescriptionChange = (e) => setDescription(e.target.value);
    const onSave = (dispatch) => {
        if(!isLocked){
            dispatch();
        }
    };

    return <WrappedComponent {...{title, setTitle, description, setDescription, isLocked, setIsLocked, onTitleChange, onDescriptionChange, onSave}} />;

}
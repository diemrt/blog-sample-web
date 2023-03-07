export default function PostTitle(props){
    const {titleFocus, title, onTitleChange, isLocked} = props;
    return (
        <textarea ref={titleFocus} className="font-serif text-3xl bg-transparent text-left h-fit w-full" type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChange} placeholder="Titolo" disabled={isLocked}/>
    );
}
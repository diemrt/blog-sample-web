export default function PostDescription(props){
    const {description, onDescriptionChange, isLocked} = props;
    return (
        <textarea className="w-full bg-transparent text-left font-serif" id="postDescription" name="postDescription" value={description} onChange={onDescriptionChange} placeholder="Qualcosa che può ispirare" disabled={isLocked}>{description}</textarea>
    );
}
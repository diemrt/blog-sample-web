import { Link } from "react-router-dom";
import ShowOnCondition from "../../ShowOnCondition/ShowOnCondition.component";
import Anticipation from "../Anticipation/Anticipation.component";
import Cover from "../Cover/Cover.component";

export default function PostPreview(props){
    const PostCover = ShowOnCondition(typeof props.cover !== "undefined", Cover, props);
    const PostAnticipation = ShowOnCondition(typeof props.cover === "undefined", Anticipation, props)

    return (
        <Link key={props.id} to={`/posts/${props.id}#heading`}>
            <div className="flex flex-col items-center p-10 gap-4 border-slate-900 border-t-2">
                <h1 className="font-sans text-sm font-extrabold w-full">_ LEGGI</h1>
                {PostCover}
                <h2 className="font-serif text-3xl hover:underline hover:underline-offset-1">{props.title}</h2>
                {PostAnticipation}
            </div>
        </Link>
    )
}
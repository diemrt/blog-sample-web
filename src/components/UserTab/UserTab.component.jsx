import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function UserTab(){
    const loggedUser = useSelector(state => state.firebase);

    return (
        <Link to="/user" className="flex flex-row items-center gap-3">
            <span title={loggedUser?.email} className="w-8 h-8 flex justify-center items-center border-2 border-slate-50 font-sans font-extrabold">{loggedUser?.email.charAt(0).toUpperCase()}</span>
        </Link>
    )
}
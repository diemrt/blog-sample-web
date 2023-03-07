import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function UserTab(){
    const user = useSelector(state => state.user);

    return (
        <Link to="/user" className="flex flex-row items-center gap-3">
            <span title={user?.email} className="w-8 h-8 flex justify-center items-center border-2 border-slate-50 font-sans font-extrabold">{user?.name.charAt(0).toUpperCase()}</span>
        </Link>
    )
}
import { useSelector } from "react-redux";

export default function UserPage(){
    const loggedUser = useSelector(state => state.firebase);
    const user = useSelector(state => state.users.find(u => u.id === loggedUser.userId));
    return (
        <div className="p-10 flex flex-row justify-between">
            <div className="flex flex-col gap-5">
                <span className="rounded-full h-20 w-20 flex justify-center items-center text-4xl font-extrabold bg-slate-900 text-white">{user.name.charAt(0).toUpperCase()}</span>
                <section className="flex flex-col gap-1">
                    <span className="text-xl">{user.name}</span>
                    <span className="text-xs">{user.email}</span>
                </section>
                <small className="text-sm">{user.bio}</small>
            </div>
        </div>
    )
}
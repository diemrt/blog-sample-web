import { Link, Outlet } from "react-router-dom";
import UserTab from "./UserTab/UserTab.component";

export default function Root(){
    return (
        <div className='text-slate-900 flex font-sans sm:h-screen flex-row justify-center sm:p-10'>
            <div className='sm:w-96 sm:border-2 sm:border-slate-900'>
                <div className='sm:h-full sm:overflow-auto'>
                    <header className='flex flex-row justify-between items-center pr-10 pl-10 p-4 font-serif border-b-2 bg-slate-900 text-white'>
                        <div className="flex flex-col">
                            <Link to="/" className='hover:underline text-2xl font-black'>Tryme.</Link>
                            <small className="text-xs text-slate-200">un blog di esempio.</small>
                        </div>
                        <UserTab />
                    </header>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
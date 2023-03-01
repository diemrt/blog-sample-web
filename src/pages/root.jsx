import { Link, Outlet } from "react-router-dom";

export default function Root(){

    return (
        <div className='text-slate-900 flex font-sans sm:h-screen flex-row justify-center sm:p-10'>
        <div className='w-96 sm:border-2 sm:border-slate-900'>
            <div className='sm:h-full sm:overflow-auto'>
                <header className='flex text-center flex-col gap-3 p-4 font-serif border-b-2 border-slate-900'>
                    <Link to="/posts" className='hover:underline text-5xl font-black text-slate-800'>Tryme.</Link>
                    <small className="text-xs text-slate-500">blog sample.</small>
                </header>
                <Outlet />
            </div>
        </div>
        </div>
    );
}
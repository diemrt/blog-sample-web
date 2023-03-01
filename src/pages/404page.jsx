import { Link } from "react-router-dom";

export default function NotFoundPage(){

    return (
        <div className='h-full text-white bg-slate-900 flex font-sans sm:h-screen flex-row justify-center sm:p-10'>
        <div className='w-96 sm:border-2 sm:border-white'>
            <div className='sm:h-full sm:overflow-auto'>
                <header className='flex text-center flex-col gap-3 p-4 font-serif border-b-2 border-slate-900'>
                    <Link to="/" className='hover:underline text-5xl font-black rotate-3'>Tryme.</Link>
                    <small className="text-xs text-slate-200">!@#$%^&.</small>
                </header>
                <div className="flex flex-col font-serif gap-10 p-10 border-t-2 items-center border-white">
                    <span className="text-7xl font-extrabold">404 !?</span>
                    <span>Posso Aiutarla?</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <span className="text-sm">La pagina che stai cercando non esiste.</span>
                    <Link to="/posts" className="flex flex-row items-center gap-2 p-2 pr-6 pl-6 border-2 bg-white text-slate-900 active:translate-y-1 font-sans font-bold text-sm rounded-full w-fit">
                        RIPORTAMI A CASA
                        <span className="material-symbols-outlined">
                            arrow_right_alt
                        </span>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}
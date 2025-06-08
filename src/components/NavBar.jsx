import logo from '/keycap.avif';

function NavBar() {
    return (
        <>
            <header className="bg-[var(--background)] h-16 flex justify-between px-24 items-center shadow-md flex-wrap">
                <div className='flex jutify-center gap-2 items-center' ><img src={logo} alt="lgo" className='w-12 h-12'/><h1 className="font-bold text-[var(--text-primary)] text-2xl md:text-8">Keyboard <span className="text-[var(--primary)]">Tester</span></h1></div>
                <div>
                    <ul className="flex justify-between items-center gap-8 font-inter text-[var(--text-secondary)] text-lg font-bold ">
                        <li className="transition duration-300 hover:text-[var(--primary)] cursor-pointer">Typing Speed</li>
                        <li className="transition duration-300 hover:text-[var(--primary)] cursor-pointer">random</li>
                        <li className="transition duration-300 hover:text-[var(--primary)] cursor-pointer">about</li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default NavBar;
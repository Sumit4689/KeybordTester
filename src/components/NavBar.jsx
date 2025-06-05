function NavBar() {
    return (
        <>
            <nav className="min-w-full bg-[var(--background)] h-16 flex justify-between px-24 items-center shadow-md">
                <div><h1 className="font-bold text-[var(--text-primary)] text-5xl font-doto">KEYBOARD TESTER</h1></div>
                <div>
                    <ul className="flex justify-between items-center gap-8 font-inter text-[var(--text-secondary)] text-lg font-bold ">
                        <li className="transition duration-300 hover:text-[var(--primary)] cursor-pointer">Typing Speed</li>
                        <li className="transition duration-300 hover:text-[var(--primary)] cursor-pointer">random</li>
                        <li className="transition duration-300 hover:text-[var(--primary)] cursor-pointer">about</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
import logo from '/keycap.avif';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();
    
    return (
        <>
            <header className="bg-[var(--background)] h-16 flex justify-between px-8 md:px-24 items-center shadow-md flex-wrap">
                <Link to="/" className='flex jutify-center gap-2 items-center'>
                    <img src={logo} alt="logo" className='w-12 h-12'/>
                    <h1 className="font-bold text-[var(--text-primary)] text-2xl md:text-8">Keyboard <span className="text-[var(--primary)]">Tester</span></h1>
                </Link>
                <div>
                    <ul className="flex justify-between items-center gap-8 font-inter text-[var(--text-secondary)] text-lg font-bold">
                        <li>
                            <Link 
                                to="/" 
                                className={`transition duration-300 hover:text-[var(--primary)] cursor-pointer ${
                                    location.pathname === '/' ? 'text-[var(--primary)]' : ''
                                }`}
                            >
                                Keyboard Test
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/speed-test" 
                                className={`transition duration-300 hover:text-[var(--primary)] cursor-pointer ${
                                    location.pathname === '/speed-test' ? 'text-[var(--primary)]' : ''
                                }`}
                            >
                                Typing Speed
                            </Link>
                        </li>
                        <li className="transition duration-300 hover:text-[var(--primary)] cursor-pointer">About</li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default NavBar;

export default function Navbar() {
    return (
        <nav className="border-gray-200 xl:w-3/4 w-full self-center flex justify-center">
            <div className="md:max-w-screen-xl flex flex-wrap items-center justify-between my-5 w-full">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/pylamp_logo.png" className="sm:h-20 h-12" alt="Pylamp Logo" />
                    <span className="self-center sm:text-2xl text-lg whitespace-nowrap uppercase text-orange-400 font-bold">Club Pylamp</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <a href="#" className="block py-2 px-3 text-black rounded font-bold md:p-0" aria-current="page">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-black rounded hover:bg-gray-100 font-bold md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0">Team Members</a>
                        </li>
                        <li>
                            <a href="/gallery" className="block py-2 px-3 text-black rounded hover:bg-gray-100 font-bold md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0">Gallery</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-black rounded hover:bg-gray-100 font-bold md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

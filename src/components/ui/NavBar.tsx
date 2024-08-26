import { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
          <a href="#about"> <img
              src="https://see.fontimg.com/api/rf5/7BWnK/OWIxZDJiOTU1MThlNDNiMGFkZWQ3ZGUwMjU4MTllMWYub3Rm/RGhhbnVzaCBIb2xsYQ/brother-signature.png?r=fs&h=130&w=2000&fg=000000&bg=FFFFFF&tb=1&s=65"
              alt="Dhanush Holla"
              className="h-8"
            /></a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <a href="#about" className=" border-2 text-gray-700 hover: px-3 py-2 rounded-md text-sm font-medium  hover:border-red-400 ">About</a>
              <a href="#experience" className=" border-2 text-gray-700 hover: px-3 py-2 rounded-md text-sm font-medium  hover:border-red-400 ">Experience</a>
              <a href="#projects" className=" border-2 text-gray-700 hover: px-3 py-2 rounded-md text-sm font-medium  hover:border-red-400 ">Projects</a>
              <a href="#passion" className=" border-2 text-gray-700 hover: px-3 py-2 rounded-md text-sm font-medium  hover:border-red-400 ">What Else I do</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="text-gray-700 hover: block px-3 py-2 rounded-md text-base font-medium  hover:border-red-400">About</a>
            <a href="#experience" className="text-gray-700 hover: block px-3 py-2 rounded-md text-base font-medium  hover:border-red-400">Experience</a>
            <a href="#projects" className="text-gray-700 hover: block px-3 py-2 rounded-md text-base font-medium  hover:border-red-400">Projects</a>
            <a href="#passion" className="text-gray-700 hover: block px-3 py-2 rounded-md text-base font-medium  hover:border-red-400">What else I do</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

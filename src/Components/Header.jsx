import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="w-full bg-black">
        <div>
          <nav className="navbar flex md:flex-row lg:flex-row flex-col justify-between">
            <h1 className="mt-8 md:ml-5 lg:ml-5 m-auto md:text-3xl lg:text-3xl text-4xl text-slate-500 font-extrabold cursor-pointer">
              Social<span className="text-yellow-500">nest</span>
            </h1>
            <div className="hidden md:block lg:block">
            <ul className="nav-list flex md:gap-20 lg:gap-20 gap-3 justify-end text-white md:mt-10 lg:mt-10 mt-6 mb-5 md:mr-8 lg:mr-8 m-auto border-white md:border-none lg:border-none">
              <li className="hover:text-yellow-500 cursor-pointer text-lg">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-yellow-500 cursor-pointer text-lg">
                <a href="/">About Us</a>
              </li>
              <li className="hover:text-yellow-500 cursor-pointer text-lg">
                <a href="/">Services</a>
              </li>
              <li className="hover:text-yellow-500 cursor-pointer text-lg">
                <a href="/">Our Team</a>
              </li>
              <li className="hover:text-yellow-500 cursor-pointer text-lg">
                <a href="/">Testimonials</a>
              </li>
              <li className="hover:text-yellow-500 cursor-pointer text-lg">
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
          </nav>
        </div>

        <div>
          {isOpen && (
            <nav className="navbar flex md:flex-row lg:flex-row flex-col">
              <ul className="nav-list flex md:flex-row lg:flex-row flex-col md:gap-20 lg:gap-20 gap-3 justify-end text-white md:mt-10 lg:mt-10 mt-6 mb-5 md:mr-8 lg:mr-8 m-auto border-white md:border-none lg:border-none">
                <li className="hover:text-yellow-500 cursor-pointer text-lg">
                  <a href="/">Home</a>
                </li>
                <li className="hover:text-yellow-500 cursor-pointer text-lg">
                  <a href="/">About Us</a>
                </li>
                <li className="hover:text-yellow-500 cursor-pointer text-lg">
                  <a href="/">Services</a>
                </li>
                <li className="hover:text-yellow-500 cursor-pointer text-lg">
                  <a href="/">Our Team</a>
                </li>
                <li className="hover:text-yellow-500 cursor-pointer text-lg">
                  <a href="/">Testimonials</a>
                </li>
                <li className="hover:text-yellow-500 cursor-pointer text-lg">
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
      <button className="uppercase text-md text-white tracking-wide md:hidden lg:hidden flex m-auto mt-4 mb-10" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? "Close" : "Menu"}
      </button>
    </div>
  );
};

export default Header;

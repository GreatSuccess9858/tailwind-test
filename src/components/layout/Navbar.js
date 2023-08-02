import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";

import close_icon from '../../assets/close_icon.svg';

function useOutsideAlerter(ref, setOpenNav) {
  useEffect(() => {

      function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
              setOpenNav(false);
          }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref]);
}

const Navbar = ({logo}) => {

  const [openNav, setOpenNav] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpenNav);

  return (
    <div className="flex flex-row absolute w-full top-0 items-center bg-scroll justify-between h-20 px-vw7">
      <Link to="/" className=" flex items-center pl-7 logo">
        <img height="64" width="59" className=" rounded-lg" src={logo} alt="logo" />
        <span className=" font-sans font-bold text-black text-2.5vw ml-2vw">Due Diligenze</span>
      </Link>

          {/* Mobile Nav */}

          <a onClick={()=>setOpenNav(true)} className="sm:absolute sm:right-14 hamburger lg:invisible">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.6" d="M0.124103 1.33333C0.124103 0.596954 0.721057 0 1.45744 0H18.6667C19.403 0 20 0.596954 20 1.33333C20 2.06971 19.403 2.66667 18.6667 2.66667H1.45744C0.721056 2.66667 0.124103 2.06971 0.124103 1.33333ZM0 8C0 7.26362 0.596954 6.66667 1.33333 6.66667H18.6667C19.403 6.66667 20 7.26362 20 8C20 8.73638 19.403 9.33333 18.6667 9.33333H1.33333C0.596955 9.33333 0 8.73638 0 8ZM0 14.6667C0 13.9303 0.596953 13.3333 1.33333 13.3333H18.6667C19.403 13.3333 20 13.9303 20 14.6667C20 15.403 19.403 16 18.6667 16H1.33333C0.596953 16 0 15.403 0 14.6667Z" fill="#737373"/></svg>
          </a>

          {
             openNav &&
              <div ref={wrapperRef} className="absolute top-0 w-full h-48 bg-white z-10">
                <div onClick={()=>setOpenNav(false)} className="absolute right-12 top-9"><img height="30" width="30" src={close_icon} alt="" /></div>
                <div className="flex flex-col items-center justify-around h-full pt-5">
                  <Link onClick={()=>setOpenNav(false)} to="/promotion" className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">Promotion</Link>
                  <Link onClick={()=>setOpenNav(false)} to="/support" className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">Support</Link>
                  <Link onClick={()=>setOpenNav(false)} to="/recruitment" className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">Recruitment</Link>
                  <Link onClick={()=>setOpenNav(false)} to="/download" className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">Download</Link>
                </div>
              </div>
          }

          
          {/* Desktop Nav */}

          <div className="flex justify-around w-2/5 mr-12 lg:visible sm:invisible">
              <Link to="/promotion" className="text-1.5vw font-semibold text-blue-800 transition-all hover:text-orange-500">Promotion</Link>
              <Link to="/support" className="text-1.5vw font-semibold text-blue-800 transition-all hover:text-orange-500">Support</Link>
              <Link to="/recruitment" className="text-1.5vw font-semibold text-blue-800 transition-all hover:text-orange-500">Recruitment</Link>
              <Link to="/download" className="text-1.5vw font-semibold text-blue-800 transition-all hover:text-orange-500">Download</Link>
          </div>

    </div>
  );
};

export default Navbar;

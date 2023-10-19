"use client"
import React, { useState } from 'react';
import { FcSearch } from "react-icons/fc";
import { Image } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import { ThemeSwitch } from "@/components/theme-switch";
import style from "./navbar.module.css";

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event:any) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Handle form submission
    console.log("Search term: ", searchTerm);
  };

  return (
	<>
	<div className={`  ${style.navbar}`}>
      <div className={style.nav}>
        <Image src="/img/logo.png" alt="Logo" width={40} height={40} />FROAURA
      </div>
      <div className="hidden lg:block "> {/* Hide on small screens */}
        <form onSubmit={handleSubmit} className='flex gap-2'>
          <label htmlFor="chat-input" className="sr-only">Search...</label>
          <div className="relative">
            <input
              id="search-chats"
              type="text"
              className="w-full rounded-lg border border-blue bg-slate-50 p-3 pr-80 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              placeholder="Search Products..."
              required
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="absolute bottom-2 right-2.5 rounded-lg p-2 text-sm text-slate-500 hover:text-blue-700 focus:outline-none sm:text-base"
            >
              
              <span className="sr-only">Search...</span>
            </button>
          </div>
          <Button className='bg-blue text-white mt-1 hover:bg-violent' radius="none" variant="solid" >SEARCH </Button>
        </form>
      </div>
      <div className={style.btn}>
        <ThemeSwitch />
        <Button  radius="none" variant="bordered" className='hidden lg:block border-[#7f0577] text-[#7f0577]'>
          Signup
        </Button>
      </div>
    </div>
    <hr className="dark:bg-white" />
	</>
    
  );
};

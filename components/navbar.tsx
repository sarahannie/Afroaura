"use client";
import { FcSearch } from "react-icons/fc";
import {Button} from "@nextui-org/react";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
// import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import style from "./navbar.module.css";
import React, { useState } from 'react';
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import { Image } from "@nextui-org/react";

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
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<>
		<div className={`  ${style.navbar}`}>
			<div className={style.nav}>
				<Image src="/img/logo.png" alt="Logo" width={40} height={40} />FROAURA
			</div>
				<div>
					<form onSubmit={handleSubmit}>
					<label htmlFor="chat-input" className="sr-only">Search...</label>
					<div className="relative">
						<input
						id="search-chats"
						type="text"
						className="w-full rounded-lg border border-slate-300 bg-slate-50 p-3 pr-40  text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
						placeholder="Search..."
						
						required
						value={searchTerm}
						onChange={handleInputChange}
						/>
						<button
						type="submit"
						className="absolute bottom-2 right-2.5 rounded-lg p-2 text-sm text-slate-500 hover:text-blue-700 focus:outline-none sm:text-base"
						>
						<FcSearch className="h-5 w-5"/>
						
						<span className="sr-only">Search...</span>
						</button>
					</div>
					</form>
				</div>
			<div className={style.btn}>
			<ThemeSwitch />
			<Button color="primary" radius="none" variant="solid">
        		Signup
      		</Button> 
			<Button color="primary" radius="none" variant="bordered">
				Join Us
			</Button>
			</div>
		</div>
		<hr className="dark:bg-white" />
		</>
	);
};

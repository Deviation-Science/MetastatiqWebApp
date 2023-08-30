"use client";

import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";

import { MetaStatiqLogo, AliceFont } from "../../public/";

const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="overflow-x-hidden">
			<nav
				className={clsx(
					"w-full h-1/6 bg-creamLogo flex justify-between items-center",
					"lg:h-[100px]"
				)}
			>
				<div
					className={clsx(
						"h-[100px] w-1/6 flex items-center",
						"lg:h-full"
					)}
				>
					<p
						className={clsx(
							AliceFont.variable,
							"text-black hidden font-alice tracking-[.5rem] text-3xl font-thin ml-5",
							"lg:flex lg:items-center"
						)}
					>
						METASTATIQ
					</p>
					<Image
						src={MetaStatiqLogo}
						alt="Company logo"
						className={clsx(
							"ml-5 h-10 cursor-pointer",
							"md:h-20",
							"lg:h-[80%] lg:ml-5"
						)}
					/>
				</div>

				<div
					className={clsx(
						"hidden text-black w-[55%] tracking-wider mr-5",
						"lg:flex justify-between lg:text-xl lg:font-light"
					)}
				>
					<p
						className={clsx(
							"cursor-pointer p-2 rounded",
							"transition-colors duration-250",
							"hover:text-darkPink"
						)}
					>
						Home
					</p>
					<p
						className={clsx(
							"cursor-pointer p-2 rounded",
							"transition-colors duration-500",
							"hover:text-darkPink"
						)}
					>
						About Us
					</p>
					<p
						className={clsx(
							"cursor-pointer p-2 rounded",
							"transition-colors duration-500",
							"hover:text-darkPink"
						)}
					>
						Services
					</p>
					<p
						className={clsx(
							"cursor-pointer p-2 rounded",
							"transition-colors duration-500",
							"hover:text-darkPink"
						)}
					>
						Resources
					</p>
					<p
						className={clsx(
							"cursor-pointer p-2 rounded",
							"transition-colors duration-500",
							"hover:text-darkPink"
						)}
					>
						Blog
					</p>
					<p
						className={clsx(
							"cursor-pointer p-2 rounded",
							"transition-colors duration-500",
							"hover:text-darkPink"
						)}
					>
						Contact
					</p>
				</div>

				{/* Hamburger menu */}
				<div
					className={clsx(
						"space-y-2 mr-5 p-3 cursor-pointer rounded",
						"transition-colors duration-500",
						"lg:hidden",
						showMenu ? "bg-white" : ""
					)}
					onClick={() => setShowMenu((menu) => !menu)}
				>
					<span className="block w-8 h-0.5 bg-[#090E10]" />
					<span className="block w-8 h-0.5 bg-[#090E10]" />
					<span className="block w-8 h-0.5 bg-[#090E10]" />
				</div>
			</nav>

			{/* Menu */}
			<div
				className={clsx(
					"h-full w-full bg-blackNew",
					"transition-transform duration-500",
					"lg:hidden",
					showMenu ? "translate-x-0" : "translate-x-full"
				)}
			>
				<MenuItem title="Home" />
				<MenuItem title="About Us" />
				<MenuItem title="Services" />
				<MenuItem title="Resources" />
				<MenuItem title="Blog" />
				<MenuItem title="Contact" />
			</div>
		</div>
	);
};

interface MenuItemProps {
	title: string;
}

const MenuItem = (props: MenuItemProps) => {
	return (
		<div
			className={clsx(
				"border border-white p-5 font-medium",
				"hover:text-blackNew hover:bg-creamLogo"
			)}
		>
			{props.title}
		</div>
	);
};

export default NavBar;

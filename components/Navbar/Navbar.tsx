"use client";

import Search from "../Search/Search";

export default function Navbar() {
	const nav = [
		{
			id: 1,
			name: "Home",
			href: "/",
		},
		{
			id: 2,
			name: "Blog",
			href: "/blog",
		},
		{
			id: 3,
			name: "Contattaci",
			href: "/about",
		},
	];
	return (
		<nav className="h-14 w-full py-1 px-12 fixed top-0 z-20">
			<ul className="h-full p-1 rounded shadow-lg bg-black flex justify-around items-center gap-5 text-white m-0">
				{nav.map((el) => (
					<li key={el.id}>
						<a href={el.href}>{el.name}</a>
					</li>
				))}
				<li>
					<Search />
				</li>
			</ul>
		</nav>
	);
}

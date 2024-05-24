import { useEffect, useState } from "react";

export const Header = () => {

	var items = [
		{
			name: "home",
			text: "Home"
		},
		{
			name: "about",
			text: "Sobre mi"
		},
		{
			name: "projects",
			text: "Proyectos"
		},
		{
			name: "contact",
			text: "Contacto"
		},
	]

	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		});

		let url = window.location.href.split("/");
		let target = url[url.length - 1].toLowerCase();
		let element = document.getElementById(target);
		element && element.scrollIntoView({ behavior: "smooth", block: "start" });
	}, []);

	return (
		<header className={scroll ? "header--fixed" : ""}>
			<nav className="px-10 py-4">
				<h3 className="text-2xl">Rmnth</h3>
				<ul className="flex gap-5 text-2xl">
					{
						items.map((item, i) => <li key={i}>
							<a href="/" onClick={e => {
								let hero = document.getElementById(item.name);
								e.preventDefault();
								hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
								window.history.pushState(item.name, item.name, "/" + item.name);
							}}>
								{item.text}
							</a>
						</li>)
					}
				</ul>
			</nav>
		</header>
	)
}

import './header.css';
import { useState } from 'react';
import Aside from '../aside/Aside';
import links from '../../data/Links';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	function handleMenu() {
		setIsOpen(!isOpen);
	}

	return (
		<header className="header">
			<nav>
				<h1 className="logo">Noath Sol</h1>

				<span>
					<ion-icon
						name={isOpen ? 'close-outline' : 'menu-outline'}
						className="menu-icon"
						onClick={handleMenu}></ion-icon>
				</span>
				<div className="nav-links">
					{links.map((link) => (
						<a
							href={`#${link.id}`}
							key={link.name}>
							{link.name}
						</a>
					))}
				</div>
			</nav>

			<Aside
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</header>
	);
}

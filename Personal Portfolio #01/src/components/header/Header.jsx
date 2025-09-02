import './header.css';
import links from '../../data/Links';

export default function Header() {
	return (
		<header className="header">
			<nav>
				<h1 className="logo">Noath Sol</h1>
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
		</header>
	);
}

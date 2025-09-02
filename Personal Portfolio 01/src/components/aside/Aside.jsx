import './aside.css';
import links from '../../data/Links';

export default function Aside({ isOpen, onClose }) {
	return (
		<>
			{isOpen && (
				<div
					className="overlay"
					onClick={onClose}></div>
			)}

			<aside className={`side-menu ${isOpen ? 'open' : ''}`}>
				{links.map((link) => (
					<a
						href={`#${link.id}`}
						key={link.name}
						onClick={onClose}>
						{link.name}
					</a>
				))}
			</aside>
		</>
	);
}

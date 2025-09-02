import './hero.css';
import socialLinks from '../../data/SocialLinks';

export default function Hero() {
	return (
		<section className="hero">
			<div className="hero-background">
				<div className="hero-overlay">
					<div className="call-container">
						<a
							href="#album"
							className="call-to-action">
							Listen to my new album &gt;
						</a>
						<div className="social-links">
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer">
									<img
										src={social.img}
										alt={`Ícone do ${social.name}`}
									/>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

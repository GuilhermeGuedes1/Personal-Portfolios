import './singles.css';
import singles from '../../data/SinglesData';

export default function Singles() {
	return (
		<section
			className="singles"
			id="music">
			<h2 className="singles-title">Singles</h2>
			<div className="singles-container">
				{singles.map((single) => (
					<img
						key={single.title}
						src={single.img}
						alt={`Capa do single ${single.title}`}
						className="single-cover"
					/>
				))}
			</div>
		</section>
	);
}

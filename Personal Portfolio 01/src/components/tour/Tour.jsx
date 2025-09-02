import './tour.css';
import Tickets from '../tickets/Tickets';
import shows from '../../data/InfoShow';

export default function Tour() {
	return (
		<section
			className="tour"
			id="tickets">
			<div className="title-container">
				<h2 className="tour-title">Tour</h2>
			</div>

			<div className="info-show-container">
				{shows.map((show) => (
					<Tickets
						key={`${show.date}-${show.city}`}
						date={show.date}
						city={show.city}
						tickets={show.tickets}
					/>
				))}
			</div>
		</section>
	);
}

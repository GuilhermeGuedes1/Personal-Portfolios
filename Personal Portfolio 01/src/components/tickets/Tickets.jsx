export default function Tickets({ date, city }) {
	return (
		<div className="info-show">
			<div className="date">{date}</div>
			<div className="city-container">
				<div className="city">{city}</div>
			</div>
			<div className="tickets-container">
				<div className="button">RSVP</div>
				<div className="button">Tickets</div>
			</div>
		</div>
	);
}

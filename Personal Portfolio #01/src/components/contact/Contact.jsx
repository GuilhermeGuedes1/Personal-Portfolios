import './contact.css';

export default function Contact() {
	return (
		<section
			className="contact"
			id="contact">
			<h2 className="contact-title">Contact</h2>
			<div className="form-container">
				<form className="form">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						required
					/>

					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						required
					/>

					<label htmlFor="subject">Subject</label>
					<input
						type="text"
						id="subject"
						name="subject"
					/>

					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						name="message"
						rows="6"
						required></textarea>

					<div className="button-container">
						<button
							type="submit"
							className="submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}

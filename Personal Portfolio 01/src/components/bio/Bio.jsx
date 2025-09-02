import './bio.css';
import bioImages from '../../data/BioData';

export default function Bio() {
	return (
		<section className="bio">
			<h2 className="bio-title">Bio</h2>
			<div className="bio-container">
				<div className="bio-description">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sit
						in similique nemo quae quaerat, culpa tenetur tempore labore ad
						perferendis sint? Animi odit impedit placeat? Natus necessitatibus
						nulla doloremque?
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sit
						in similique nemo quae quaerat, culpa tenetur tempore labore ad
						perferendis sint? Animi odit impedit placeat? Natus necessitatibus
						nulla doloremque?
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sit
						in similique nemo quae quaerat, culpa tenetur tempore labore ad
						perferendis sint? Animi odit impedit placeat? Natus necessitatibus
						nulla doloremque?
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sit
						in similique nemo quae quaerat, culpa tenetur tempore labore ad
						perferendis sint? Animi odit impedit placeat? Natus necessitatibus
						nulla doloremque?
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sit
						in similique nemo quae quaerat, culpa tenetur tempore labore ad
						perferendis sint? Animi odit impedit placeat? Natus necessitatibus
						nulla doloremque?
					</p>
				</div>
				<div className="bio-images">
					{bioImages.map((image) => (
						<img
							key={image.id}
							src={image.url}
							alt={image.alt || 'Imagem da biografia'}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

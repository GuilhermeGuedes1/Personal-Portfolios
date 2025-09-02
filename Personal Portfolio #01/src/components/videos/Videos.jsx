import './videos.css';
import videos from '../../data/VideoData';

export default function Videos() {
  return (
    <section className="videos" id='videos'>
      <h2 className="videos-title">Videos</h2>
      <div className="videos-container">
        {videos.map((video) => (
          <div key={video.id} className="video-wrapper">
            <iframe
              src={video.url}
              title={`Vídeo: ${video.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  );
}

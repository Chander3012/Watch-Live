import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import videoLinks from '../../data/links';
import styles from './style.module.css';

const runAdScript = () => {
  // Check if script already exists to avoid duplicates
  if (!document.querySelector('script[data-zone="9403396"]')) {
    const s = document.createElement('script');
    s.src = 'https://al5sm.com/tag.min.js';
    s.setAttribute('data-zone', '9403396');
    (document.body || document.documentElement).appendChild(s);
  }
};

const PlayVideo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = videoLinks.find((v) => v.id.toString() === id);

  if (!video) {
    return (
      <>
        <Navbar />
        <div className={styles.wrapper}>
          <h2>Video not found.</h2>
        </div>
        <Footer />
      </>
    );
  }

  const previewUrl = `https://drive.google.com/file/d/${video.driveId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${video.driveId}`;
  const adLink = 'https://otieu.com/4/9403366';

  const handleDownload = () => {
    runAdScript();
    window.open(adLink, '_blank');
    setTimeout(() => {
      window.location.href = downloadUrl;
    }, 5000);
  };

  const handleVideoClick = () => {
    runAdScript();
    window.open(adLink, '_blank');
  };

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.player}>
          <button className={styles.backButton} onClick={() => navigate('/Free-Videos')}>
            ← Back
          </button>

          <div className={styles.videoContainer}>
            <a
              href={adLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.overlayLink}
              onClick={handleVideoClick}
            ></a>
            <iframe
              src={previewUrl}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={video.title}
            ></iframe>
          </div>

          <div className={styles.videoInfo}>
            <h1>{video.title}</h1>
            <p className={styles.uploader}>By: {video.name}</p>
            <button className={styles.downloadButton} onClick={handleDownload}>
              ⬇ Download Video
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlayVideo;

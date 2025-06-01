import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import videoLinks from '../../data/links';
import styles from './style.module.css';

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

  return (
    <>
      <Navbar />
      
      <div className={styles.wrapper}>
        <div className={styles.player}>
          <button className={styles.backButton} onClick={() => navigate('/Free-Videos')}>
            ← Back
          </button>
          <div className={styles.videoContainer}>
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
            <a href={downloadUrl} className={styles.downloadButton} download>
              ⬇ Download Video
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlayVideo;

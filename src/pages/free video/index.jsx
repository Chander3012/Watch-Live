import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './style.module.css';
import videoLinks from '../../data/links'; // ✅ Import the new data file

const FreeVideos = () => {
  const handleCardClick = (id) => {
    window.open(`/playvideo/${id}`, '_blank');
  };

  return (
    <>
      <Navbar />
      <section className={styles.videoSection}>
        <h2>Free Videos</h2>
        <p>Watch exclusive lectures directly here. No redirects.</p>

        <div className={styles.videoGrid}>
          {videoLinks.map(({ id, title, name, image }) => (
            <div
              key={id}
              className={styles.videoCard}
              onClick={() => handleCardClick(id)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={image}
                alt={title}
                className={styles.videoThumbnail}
              />
              <h3 className={styles.videoTitle}>{title}</h3>
              <p className={styles.videoName}>By: {name}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FreeVideos;

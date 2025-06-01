import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './style.module.css';
import videoLinks from '../../data/links'; // ✅ Import the new data file

const FreeVideos = () => {
  const handleCardClick = (id) => {
    window.open(`/playvideo/${id}`, '_blank');
  };

  useEffect(() => {
    // Inject banner ad script once
    if (!document.querySelector('script[data-zone="9403396"]')) {
      const bannerScript = document.createElement('script');
      bannerScript.src = 'https://al5sm.com/tag.min.js';
      bannerScript.setAttribute('data-zone', '9403396');
      (document.body || document.documentElement).appendChild(bannerScript);
    }

    // Inject interstitial ad script once
    if (!document.querySelector('script[data-interstitial="9403405"]')) {
      const interstitialScript = document.createElement('script');
      interstitialScript.src = 'https://groleegni.net/401/9403405';
      interstitialScript.setAttribute('data-interstitial', '9403405');
      (document.body || document.documentElement).appendChild(interstitialScript);
    }
  }, []);

  return (
    <>
      <Navbar />
      <section className={styles.videoSection}>
        <h2>Free Videos</h2>
        <p>Watch exclusive lectures directly here. No redirects.</p>

        {/* Banner Ad - Top */}
        <div className={styles.bannerAdTop}>
          {/* Ad placeholder div - your ad script will inject ad content here */}
          <div id="banner-ad-top" />
        </div>

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

        {/* Banner Ad - Bottom */}
        <div className={styles.bannerAdBottom}>
          <div id="banner-ad-bottom" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FreeVideos;

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [request, setRequest] = useState('');
    const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      const elements = document.querySelectorAll(`.${styles.animate}`);
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add(styles.active);
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger on mount

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Request submitted: ${request}`);
    setRequest('');
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.animate}`}>
  <div className={styles.heroContainer}>
    <div className={styles.heroContent}>
      <h1 className={styles.heroTitle}>Watch Live — Your Exclusive Video Hub</h1>
      <p className={styles.heroSubtitle}>
        Stream your favorite videos anytime, anywhere. Free and premium content available.
      </p>
      <div className={styles.buttonGroup}>
        <button className={styles.secondaryButton} onClick={() => navigate('/free-videos')}>Start Watch</button>
      </div>
    </div>
    <div className={styles.heroImage}>
      {/* Leave this blank for background image or insert <img src="..." alt="Hero Visual" /> */}
    </div>
  </div>
</section>


      <section id="services" className={styles.servicesSection}>
  <h2 className={styles.sectionTitle}>What We Offer</h2>
  <div className={styles.servicesGrid}>
    <div className={styles.serviceCard}>
      <h3>Exclusive Content</h3>
      <p>Access a wide range of shows and videos available only on Watch Live — not found on any other platform.</p>
    </div>
    <div className={styles.serviceCard}>
      <h3>Free Content</h3>
      <p>Enjoy a large library of completely free entertainment — no subscription or payment needed.</p>
    </div>
    <div className={styles.serviceCard}>
      <h3>Latest Releases</h3>
      <p>Stay up-to-date with the newest videos, web series, and curated content added regularly.</p>
    </div>
    <div className={styles.serviceCard}>
      <h3>Trending Picks</h3>
      <p>Discover what's hot and popular right now — updated daily to match your mood and interest.</p>
    </div>
    {/* <div className={styles.serviceCard}>
      <h3>HD Viewing</h3>
      <p>All content is available in high-definition, giving you a premium viewing experience — anytime, anywhere.</p>
    </div> */}
  </div>
</section>


      <section id="faq" className={`${styles.faqSection} ${styles.animate} ${styles.animateRight}`}>
  <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>

  <div className={styles.faqItem}>
    <h4>What is Watch Live?</h4>
    <p>
      Watch Live is a free streaming platform offering the latest, trending, and exclusive content — no live streams, no subscriptions.
    </p>
  </div>

  <div className={styles.faqItem}>
    <h4>Is the content really free?</h4>
    <p>
      Yes! You can watch all available content for free. No signups, no fees — just click and enjoy.
    </p>
  </div>

  <div className={styles.faqItem}>
    <h4>What type of content is available?</h4>
    <p>
      We feature exclusive short films, viral videos, entertainment clips, and newly released content curated just for you.
    </p>
  </div>

  <div className={styles.faqItem}>
    <h4>Do I need an account to watch?</h4>
    <p>
      Not at all. Just visit the site, browse the library, and start watching instantly.
    </p>
  </div>

  <div className={styles.faqItem}>
    <h4>How often is new content added?</h4>
    <p>
      Our platform is updated regularly with the latest and most engaging videos to keep you entertained every day.
    </p>
  </div>
</section>


      <section id="request" className={`${styles.requestSection} ${styles.animate}`}>
  <h2 className={styles.sectionTitle}>Content Request Form</h2>
  <form className={styles.requestForm} onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label>
    <input id="name" type="text" placeholder="Your Name" required />

    <label htmlFor="email">Email</label>
    <input id="email" type="email" placeholder="Your Email" required />

    <label htmlFor="request">Request Details</label>
    <textarea
      id="request"
      rows="4"
      placeholder="What content would you like to see?"
      required
      value={request}
      onChange={(e) => setRequest(e.target.value)}
    />

    <button type="submit" className={styles.submitButton}>
      Send Request
    </button>
  </form>
</section>


      <Footer />
    </>
  );
};

export default LandingPage;

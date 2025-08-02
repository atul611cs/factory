import React from 'react';
import styles from './Home.module.css';
import HeroSlider from '../../components/HeroSlider/HeroSlider';

const Home = () => {
  return (
    <div className={styles.home}>
      <HeroSlider />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to XYZ.</h1>
          <p>Leading Manufacturer of Industrial Components</p>
          <button>Explore Our Products</button>
        </div>
      </section>
    </div>
  );
};

export default Home;

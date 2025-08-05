import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <section className={styles.intro}>
        <h1>About XYZ Industries</h1>
        <p>
          XYZ Industries is a leading manufacturer of high-quality industrial components,
          committed to innovation, precision, and customer satisfaction.
        </p>
      </section>

      <section className={styles.mission}>
        <h2>Our Mission</h2>
        <p>To deliver top-tier industrial products that empower our clients to succeed.</p>
      </section>

      <section className={styles.vision}>
        <h2>Our Vision</h2>
        <p>To be a global leader in industrial solutions with excellence and trust.</p>
      </section>

      <section className={styles.values}>
        <h2>Core Values</h2>
        <ul>
          <li>Quality & Precision</li>
          <li>Customer-Centric Approach</li>
          <li>Innovation & Technology</li>
          <li>Integrity & Responsibility</li>
        </ul>
      </section>

      <section className={styles.cta}>
        <Link to="/products" className={styles.ctaBtn}>Explore Our Products</Link>
      </section>
    </div>
  );
};

export default About;

import styles from "./Home.module.css";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import productData from "../../data/data";
// your local mock data
import { Link } from "react-router-dom";

const Home = () => {
  // Select top 3–4 featured products
  const featuredProducts = productData.slice(0, 4);

  return (
    <div className={styles.home}>
      <HeroSlider />

      <section className={styles.featured}>
        <h2>Featured Products</h2>
        <div className={styles.productGrid}>
          {featuredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <Link to={`/product/${product.id}`} className={styles.viewBtn}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

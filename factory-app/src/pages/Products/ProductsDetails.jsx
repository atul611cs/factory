import { useParams } from "react-router-dom";
import data from "../../data/data";
 // Adjust if needed after DB later on

const ProductDetail = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id.toString() === id);

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="300" />
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

export default ProductDetail;

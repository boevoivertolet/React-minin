import { Product } from "./components/Product";
import { products } from "./data/products";

function App() {
  return (
    <div className="products">
      {products.map((el) => (
        <Product product={el} />
      ))}
    </div>
  );
}

export default App;

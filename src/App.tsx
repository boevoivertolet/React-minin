import { Product } from "./components/Product";
import { products } from "./data/products";

function App() {
  return (
    <div className="products">
      {products.map((prod) => (
        <Product key={prod.id} product={prod} />
      ))}
    </div>
  );
}

export default App;

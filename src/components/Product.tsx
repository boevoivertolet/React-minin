import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState<boolean>(false);

  const viewDetails = () => {
    setDetails(!details);
  };

  return (
    <div className="product">
      <img className="img" src={product.image} />
      <div>{product.title}</div>
      <p>{product.price}</p>
      <button className="button" onClick={viewDetails}>
        {!details ? "Show details" : "Hide details"}
      </button>
      {details && <p>{product.description}</p>}
    </div>
  );
}

import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {

  const [details, setDetails] = useState<boolean>(false);


  const buttonClassName = details ? "yellow" : "blue";

  const viewDescription = () => {
    setDetails(!details);
  };

  return (
    <div className="product">
      <img className="img" src={product.image} alt="#" />
      <div>{product.title}</div>
      <p>{product.price}</p>
      <button className={buttonClassName} onClick={viewDescription}>
        {!details ? "Show details" : "Hide details"}{" "}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:<span style={{ fontWeight: "bold" }}>{product.rating.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
}

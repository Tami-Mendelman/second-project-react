import { useEffect, useState } from "react";
import { getProducts } from "../services/service";

export default function StoreItems() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data);
        console.log("Products (cached or from API):", data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Store Items</h2>
      <ul  style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", 
          gap: "20px", 
        }}>
        {products.map(p => (
          <li key={p.id} style={{ marginBottom: "20px" }}>
            <img
              src={p.image}
              alt={p.title}
              style={{ width: "150px", height: "150px", objectFit: "contain" }}
            />
            <p>{p.title}</p>
          </li>
        ))}
      </ul>
    </div>
  ); 
}

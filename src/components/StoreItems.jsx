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

  return null; 
}

import React from "react";
import { useState,useEffect } from "react";
import { getProducts } from "../services/service";
export default function StoreItems()
{
    const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data);
        console.log("Products from API:", data); 
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load products");
      });
  }, []);

  return null;
}
  
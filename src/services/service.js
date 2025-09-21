import React from "react";



export function getProducts() {
  return fetch("https://fakestoreapi.com/products")
    .then(res => {
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      return res.json();
    });
}

import { addLocalStorageItem, getLocalStorageItem } from "../utils/utils";

const PRODUCTS_CACHE_KEY = "products_cache";

export function getProducts() {
  const cached = getLocalStorageItem(PRODUCTS_CACHE_KEY);
  if (cached) {
    return Promise.resolve(cached);
  }

  return fetch("https://fakestoreapi.com/products")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    })
    .then((data) => {
      addLocalStorageItem(PRODUCTS_CACHE_KEY, data);
      return data;
    });
}

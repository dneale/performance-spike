import axios from 'axios';

export const FETCH_PRODUCTS = 'fetch_products';

export function fetchProducts() {
  const request = axios.get('http://localhost:3000/products');
  return {
    type: FETCH_PRODUCTS,
    payload: request,
  };
}

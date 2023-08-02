import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar/navbar';
import ProductList from '../productlist/productlist';
import './homepage.css'


function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    // Fetch all categories
    axios.get('https://fakestoreapi.com/products/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('An error occurred fetching categories:', error);
      });

    let url = 'https://fakestoreapi.com/products';
    if (category !== 'all') {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    // Fetch products based on category
    axios.get(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('An error occurred fetching products:', error);
      });
  }, [category]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar categories={categories} onCategoryChange={setCategory} onSearchChange={setSearchTerm} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default HomePage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import ProductCard from './productcard';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(response.data);
    };

    let url = 'https://fakestoreapi.com/products';
    if (category !== 'all') {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }
    const fetchProducts = async () => {
      const response = await axios.get(url);
      setProducts(response.data);
    };

    fetchCategories();
    fetchProducts();
  }, [category]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar categories={categories} onSearchChange={setSearchTerm} onCategoryChange={setCategory} />
      <div>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;

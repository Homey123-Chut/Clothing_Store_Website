import React, { useState, useEffect } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from '../components/Footer';
import apiService from '../services/api';


import women_T_shirt1 from '../assets/women_shirt42.jpg';
import women_T_shirt2 from '../assets/women_shirt39.jpg';
import women_T_shirt3 from '../assets/women_shirt7.jpg';
import women_T_shirt4 from '../assets/women_shirt29.jpg';
import women_T_shirt5 from '../assets/women_shirt5.jpg';
import women_T_shirt6 from '../assets/women_shirt6.jpg';
import women_T_shirt7 from '../assets/women_shirt3.jpg';
import women_T_shirt8 from '../assets/women_shirt33.jpg';
import women_T_shirt9 from '../assets/women_shirt9.jpg';
import women_T_shirt10 from '../assets/women_shirt10.jpg';
import women_T_shirt11 from '../assets/women_shirt11.jpg';
import women_T_shirt12 from '../assets/women_shirt12.jpg';
import women_T_shirt13 from '../assets/women_shirt32.jpg';
import women_T_shirt14 from '../assets/women_shirt14.jpg';
import women_T_shirt15 from '../assets/women_shirt15.jpg';
import women_T_shirt16 from '../assets/women_shirt34.jpg';
import women_T_shirt17 from '../assets/women_shirt35.jpg';
import women_T_shirt18 from '../assets/women_shirt36.jpg';
import women_T_shirt19 from '../assets/women_shirt19.jpg';
import women_T_shirt20 from '../assets/women_shirt37.jpg';
import women_T_shirt21 from '../assets/women_shirt21.jpg';
import women_T_shirt22 from '../assets/women_shirt38.jpg';
import women_T_shirt23 from '../assets/women_shirt23.jpg';
import women_T_shirt24 from '../assets/women_shirt24.jpg';
import women_T_shirt25 from '../assets/women_shirt25.jpg';
import women_T_shirt26 from '../assets/women_shirt2.jpg';
import women_T_shirt27 from '../assets/women_shirt40.jpg';
import women_T_shirt28 from '../assets/women_shirt41.jpg';
import women_T_shirt29 from '../assets/women_shirt4.jpg';
import women_T_shirt30 from '../assets/women_shirt30.jpg';
import women_T_shirt31 from '../assets/women_shirt1.jpg';

const products = [
  { id: 1, name: "Regular Fitted Crop T-Shirt", originalPrice: 39.99, salePrice: 27.99, discount: 30, image: women_T_shirt1, colors: ['white', 'red'] },
  { id: 2, name: "Regular Crop Textured T-Shirt", originalPrice: 44.99, salePrice: 31.49, discount: 30, image: women_T_shirt2, colors: ['pink'] },
  { id: 3, name: "Regular V-Neck T-Shirt", originalPrice: 49.99, salePrice: 34.99, discount: 30, image: women_T_shirt3, colors: ['beige'] },
  { id: 4, name: "Regular Polo T-Shirt", originalPrice: 54.99, salePrice: 38.49, discount: 30, image: women_T_shirt4, colors: ['navy'] },
  { id: 5, name: "Basic Fitted Crop T-Shirt", originalPrice: 39.99, salePrice: 27.99, discount: 30, image: women_T_shirt5, colors: ['white', 'red'] },
  { id: 6, name: "Casual Crop Textured T-Shirt", originalPrice: 44.99, salePrice: 31.49, discount: 30, image: women_T_shirt6, colors: ['pink'] },
  { id: 7, name: "Classic V-Neck T-Shirt", originalPrice: 49.99, salePrice: 34.99, discount: 30, image: women_T_shirt7, colors: ['beige'] },
  { id: 8, name: "Premium Polo T-Shirt", originalPrice: 54.99, salePrice: 38.49, discount: 30, image: women_T_shirt8, colors: ['navy'] },
  { id: 9, name: "Trendy Graphic Tee", originalPrice: 42.99, salePrice: 29.99, discount: 30, image: women_T_shirt9, colors: ['white', 'black'] },
  { id: 10, name: "Loose Fit T-Shirt", originalPrice: 36.99, salePrice: 25.99, discount: 30, image: women_T_shirt10, colors: ['blue'] },
  { id: 11, name: "Sporty Crop Tee", originalPrice: 41.99, salePrice: 28.99, discount: 30, image: women_T_shirt11, colors: ['grey'] },
  { id: 12, name: "Minimalist Tee", originalPrice: 38.99, salePrice: 26.99, discount: 30, image: women_T_shirt12, colors: ['white'] },
  { id: 13, name: "Oversized T-Shirt", originalPrice: 45.99, salePrice: 32.19, discount: 30, image: women_T_shirt13, colors: ['green'] },
  { id: 14, name: "Slim Fit Tee", originalPrice: 37.99, salePrice: 26.59, discount: 30, image: women_T_shirt14, colors: ['red'] },
  { id: 15, name: "Ribbed Crop T-Shirt", originalPrice: 39.99, salePrice: 27.99, discount: 30, image: women_T_shirt15, colors: ['yellow'] },
  { id: 16, name: "Boxy T-Shirt", originalPrice: 43.99, salePrice: 30.79, discount: 30, image: women_T_shirt16, colors: ['orange'] },
  { id: 17, name: "Tie-Dye Tee", originalPrice: 46.99, salePrice: 32.89, discount: 30, image: women_T_shirt17, colors: ['multi'] },
  { id: 18, name: "Long Sleeve T-Shirt", originalPrice: 49.99, salePrice: 34.99, discount: 30, image: women_T_shirt18, colors: ['purple'] },
  { id: 19, name: "Short Sleeve Tee", originalPrice: 35.99, salePrice: 25.19, discount: 30, image: women_T_shirt19, colors: ['white', 'blue'] },
  { id: 20, name: "Printed Crop T-Shirt", originalPrice: 44.99, salePrice: 31.49, discount: 30, image: women_T_shirt20, colors: ['pink', 'white'] },
  { id: 21, name: "Basic Tee", originalPrice: 32.99, salePrice: 22.99, discount: 30, image: women_T_shirt21, colors: ['white'] },
  { id: 22, name: "Embroidered T-Shirt", originalPrice: 47.99, salePrice: 33.59, discount: 30, image: women_T_shirt22, colors: ['black'] },
  { id: 23, name: "Pocket Tee", originalPrice: 39.99, salePrice: 27.99, discount: 30, image: women_T_shirt23, colors: ['grey'] },
  { id: 24, name: "Henley T-Shirt", originalPrice: 42.99, salePrice: 29.99, discount: 30, image: women_T_shirt24, colors: ['blue'] },
  { id: 25, name: "Graphic Crop Tee", originalPrice: 41.99, salePrice: 28.99, discount: 30, image: women_T_shirt25, colors: ['white', 'black'] },
  { id: 26, name: "Seamless T-Shirt", originalPrice: 38.99, salePrice: 26.99, discount: 30, image: women_T_shirt26, colors: ['beige'] },
  { id: 27, name: "Scoop Neck Tee", originalPrice: 36.99, salePrice: 25.89, discount: 30, image: women_T_shirt27, colors: ['white'] },
  { id: 28, name: "Cropped Long Sleeve Tee", originalPrice: 48.99, salePrice: 34.29, discount: 30, image: women_T_shirt28, colors: ['black'] },
  { id: 29, name: "Relaxed Fit T-Shirt", originalPrice: 37.99, salePrice: 26.59, discount: 30, image: women_T_shirt29, colors: ['green'] },
  { id: 30, name: "Mock Neck Tee", originalPrice: 44.99, salePrice: 31.49, discount: 30, image: women_T_shirt30, colors: ['white'] },
  { id: 31, name: "Ruffle Sleeve T-Shirt", originalPrice: 46.99, salePrice: 32.89, discount: 30, image: women_T_shirt31, colors: ['pink'] }
];

const categories = [
  {
    name: "Women",
    items: [
      { name: "T-shirt", link: "/women/t-shirt" },
      { name: "Shirt", link: "/women/shirt" },
      { name: "Jacket", link: "/women/jacket" },
      { name: "Skirt", link: "/women/skirt" },
      { name: "Shorts", link: "/women/shorts" },
      { name: "Jeans", link: "/women/jeans" },
      { name: "Trouser", link: "/women/trouser" },
      { name: "Dress", link: "/women/dress" },
      { name: "Shoes", link: "/women/shoes"},
    ],
  },
  {
    name: "Men",
    items: [
      { name: "T-shirt", link: "/men/t-shirt" },
      { name: "Jeans", link: "/men/jeans" },
      { name: "Jacket", link: "/men/jacket" },
      { name: "Trouser", link: "/men/trouser" },
      { name: "Shirt", link: "/men/shirt" },
      { name: "Shoes", link: "/men/shoes"},
    ],
  },
  {
    name: "Girls",
    items: [
      { name: "Clothing", link: "/girls/clothing" },
      { name: "Shoes", link: "/girls/shoes"},
    ],
  },
  {
    name: "Boys",
    items: [
      { name: "Clothing", link: "/boys/clothing" },
      { name: "Shoes", link: "/boys/shoes"},
    ],
  },
  {
    name: "Accessories",
    items: [
      { name: "Glasses", link: "/accessories/glasses" },
      { name: "Watches", link: "/accessories/watches"},
      { name: "Gloves", link: "/accessories/gloves" },
      { name: "Belt", link: "/accessories/belt" },
      { name: "Hat", link: "/accessories/hat" },
      { name: "Bag", link: "/accessories/bag" },
      { name: "Wallet", link: "/accessories/wallet" },
    ],
  },
];



const Women_T_shirt = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(new Set());
  const [openDropdown, setOpenDropdown] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use static products as fallback, try to fetch from API
  const [displayProducts, setDisplayProducts] = useState(products);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Try different subcategory names that might match your backend
        const possibleSubcategories = ['t-shirt', 'tshirt', 'women-t-shirt', 'shirt'];
        let response = null;
        
        for (const subcategory of possibleSubcategories) {
          try {
            response = await apiService.getProducts({
              category: 'women',
              subcategory: subcategory
            });
            if (response && response.products && response.products.length > 0) {
              break; // Found products, stop trying
            }
          } catch (subErr) {
            console.warn(`Failed to fetch with subcategory: ${subcategory}`, subErr);
          }
        }
        
        if (response && response.products && response.products.length > 0) {
          setDisplayProducts(response.products);
        } else {
          // Fallback to static products if API fails
          setDisplayProducts(products);
        }
      } catch (err) {
        setError('Using static products - API connection failed');
        console.error('Error fetching products:', err);
        setDisplayProducts(products); // Use static products as fallback
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleFavorite = async (productId) => {
    try {
      const newFavorites = new Set(favorites);
      if (newFavorites.has(productId)) {
        await apiService.removeFromFavorites(productId);
        newFavorites.delete(productId);
      } else {
        await apiService.addToFavorites(productId);
        newFavorites.add(productId);
      }
      setFavorites(newFavorites);
    } catch (err) {
      console.error('Error toggling favorite:', err);
      // You might want to show a toast notification here
    }
  };

  const handleProductClick = (product) => {
    // Navigate to payment page with product information
    navigate('/payment', { state: { product } });
  };

  return (
    <div>
      <div className="homepage-container">
        <div className="header">
          <div className="logo-container">
            <Link to="/" className="logo-bg">
              <span className="logo-text">
                <span className="logo-star">★</span>
                StyleStore
              </span>
            </Link>
          </div>
          <div className="header-right">
            <div className="header-row">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <div className="icons-area">
                <Bell size={20} className="text-black" />
                <Heart size={20} className="text-black" />
                <div className="shopping-bag-rel">
                  <ShoppingBag size={22} className="text-black" />
                  <span className="shopping-bag-badge">0</span>
                </div>
                <Link to="/login" className="login-link">LOGIN</Link>
                <Link to="/register" className="register-link">REGISTER</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="category-nav">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`category-group${openDropdown === cat.name ? " open" : ""}`}
              onMouseEnter={() => cat.items && setOpenDropdown(cat.name)}
              onMouseLeave={() => cat.items && setOpenDropdown(null)}
            >
              <button
                className={`category-btn${cat.name === "Women" ? " women" : ""}`}
                style={{ fontWeight: 700 }}
                onClick={() => setOpenDropdown(cat.name === openDropdown ? null : cat.name)}
                type="button"
              >
                {cat.name}
              </button>
              {cat.items && (
                <div className="dropdown">
                  <ul>
                    {cat.items.map((item) => (
                      <li key={item.name}>
                        <Link to={item.link}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="women-tshirt-container">
        <div className="sale-banner">
          <div className="banner-content">
            <div className="sale-text">
              <span className="up-to">UP TO</span>
              <span className="percentage">70% OFF</span>
              <span className="sale-subtitle">ON MID-YEAR SALE</span>
            </div>
          </div>
        </div>
        <div className="women-tshirt-title">Women T-shirt</div>

        {/* Product Grid */}
        <div className="products-grids">
          {loading ? (
            <div className="loading-message">Loading products...</div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : displayProducts.length === 0 ? (
            <div className="no-products-message">No products found.</div>
          ) : (
            displayProducts.map((product) => (
              <div key={product.id} className="product-cards">
                <div className="product-image-containers">
                  <div className="discount-badge">{product.discount}%</div>
                  <button
                    className={`favorite-btn ${favorites.has(product.id) ? 'active' : ''}`}
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart size={16} fill={favorites.has(product.id) ? '#ef4444' : 'none'} />
                  </button>
                  <img
                    src={product.images && product.images[0] ? product.images[0] : product.image || '/placeholder-image.jpg'}
                    alt={product.name}
                    className="product-images"
                    onClick={() => handleProductClick(product)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="price-container">
                    <span className="sale-price">US ${product.salePrice || product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">US ${product.originalPrice}</span>
                    )}
                  </div>
                  <div className="color-options">
                    {product.colors && product.colors.map((color, index) => (
                      <div key={index} className={`color-dot ${color}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      </div>
      <div className="Footer"><Footer /></div>


      
    </div>
  );
};

export default Women_T_shirt;
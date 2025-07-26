import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from '../components/Footer';

import Men_T_shirt1 from '../assets/men_shirt23.jpg';
import Men_T_shirt2 from '../assets/men_shirt24.jpg';
import Men_T_shirt3 from '../assets/men_shirt25.jpg';
import Men_T_shirt4 from '../assets/men_shirt26.jpg';
import Men_T_shirt5 from '../assets/men_shirt27.jpg';
import Men_T_shirt6 from '../assets/men_shirt28.jpg';
import Men_T_shirt7 from '../assets/men_shirt29.jpg';
import Men_T_shirt8 from '../assets/men_shirt30.jpg';
import Men_T_shirt9 from '../assets/men_shirt31.jpg';
import Men_T_shirt10 from '../assets/men_shirt32.jpg';
import Men_T_shirt11 from '../assets/men_shirt33.jpg';
import Men_T_shirt12 from '../assets/men_shirt34.jpg';
import Men_T_shirt13 from '../assets/men_shirt35.jpg';
import Men_T_shirt14 from '../assets/men_shirt36.jpg';
import Men_T_shirt15 from '../assets/men_shirt37.jpg';
import Men_T_shirt16 from '../assets/men_shirt38.jpg';
import Men_T_shirt17 from '../assets/men_shirt39.jpg';
import Men_T_shirt18 from '../assets/men_shirt40.jpg';
import Men_T_shirt19 from '../assets/men_shirt41.jpg';
import Men_T_shirt20 from '../assets/men_shirt42.jpg';
import Men_T_shirt21 from '../assets/men_shirt43.jpg';
import Men_T_shirt22 from '../assets/men_shirt44.jpg';
import Men_T_shirt23 from '../assets/men_shirt45.jpg';
import Men_T_shirt26 from '../assets/men_shirt46.jpg';


const products = [
  { id: 1, name: "Vintage Graphic Tee", originalPrice: 59.99, salePrice: 17.99, discount: 70, image: Men_T_shirt1, colors: ['black', 'grey'] },
  { id: 2, name: "Modern Fit Tee", originalPrice: 49.99, salePrice: 14.99, discount: 70, image: Men_T_shirt2, colors: ['white'] },
  { id: 3, name: "Classic Crew Neck", originalPrice: 44.99, salePrice: 13.49, discount: 70, image: Men_T_shirt3, colors: ['blue'] },
  { id: 4, name: "Athletic Tee", originalPrice: 39.99, salePrice: 11.99, discount: 70, image: Men_T_shirt4, colors: ['grey', 'red'] },
  { id: 5, name: "Urban Street Tee", originalPrice: 54.99, salePrice: 16.49, discount: 70, image: Men_T_shirt5, colors: ['black'] },
  { id: 6, name: "Bold Print Tee", originalPrice: 42.99, salePrice: 12.89, discount: 70, image: Men_T_shirt6, colors: ['white', 'multi'] },
  { id: 7, name: "Essentials Tee", originalPrice: 35.99, salePrice: 10.79, discount: 70, image: Men_T_shirt7, colors: ['navy'] },
  { id: 8, name: "Heavy Cotton Tee", originalPrice: 46.99, salePrice: 14.09, discount: 70, image: Men_T_shirt8, colors: ['green'] },
  { id: 9, name: "Casual Logo Tee", originalPrice: 48.99, salePrice: 14.69, discount: 70, image: Men_T_shirt9, colors: ['black', 'white'] },
  { id: 10, name: "Washed Vintage Tee", originalPrice: 51.99, salePrice: 15.59, discount: 70, image: Men_T_shirt10, colors: ['brown'] },
  { id: 11, name: "Relaxed Fit Tee", originalPrice: 43.99, salePrice: 13.19, discount: 70, image: Men_T_shirt11, colors: ['blue', 'yellow'] },
  { id: 12, name: "Cotton Linen Tee", originalPrice: 55.99, salePrice: 16.79, discount: 70, image: Men_T_shirt12, colors: ['beige'] },
  { id: 13, name: "Faded Graphic Tee", originalPrice: 57.99, salePrice: 17.39, discount: 70, image: Men_T_shirt13, colors: ['black', 'grey'] },
  { id: 14, name: "Loose Fit Tee", originalPrice: 49.99, salePrice: 14.99, discount: 70, image: Men_T_shirt14, colors: ['white', 'blue'] },
  { id: 15, name: "Eco Recycled Tee", originalPrice: 39.99, salePrice: 11.99, discount: 70, image: Men_T_shirt15, colors: ['green'] },
  { id: 16, name: "Soft Touch Tee", originalPrice: 47.99, salePrice: 14.39, discount: 70, image: Men_T_shirt16, colors: ['pink'] },
  { id: 17, name: "Minimal Logo Tee", originalPrice: 45.99, salePrice: 13.79, discount: 70, image: Men_T_shirt17, colors: ['grey', 'white'] },
  { id: 18, name: "Washed Cotton Tee", originalPrice: 53.99, salePrice: 16.19, discount: 70, image: Men_T_shirt18, colors: ['navy'] },
  { id: 19, name: "Paint Splash Tee", originalPrice: 41.99, salePrice: 12.59, discount: 70, image: Men_T_shirt19, colors: ['multi'] },
  { id: 20, name: "Tonal Stripe Tee", originalPrice: 52.99, salePrice: 15.89, discount: 70, image: Men_T_shirt20, colors: ['black', 'red'] },
  { id: 21, name: "Patchwork Tee", originalPrice: 56.99, salePrice: 17.09, discount: 70, image: Men_T_shirt21, colors: ['multi', 'beige'] },
  { id: 22, name: "Contrast Stitch Tee", originalPrice: 50.99, salePrice: 15.29, discount: 70, image: Men_T_shirt22, colors: ['white'] },
  { id: 23, name: "Retro Stripe Tee", originalPrice: 44.99, salePrice: 13.49, discount: 70, image: Men_T_shirt23, colors: ['blue', 'yellow'] },
  { id: 26, name: "Shadow Print Tee", originalPrice: 58.99, salePrice: 17.69, discount: 70, image: Men_T_shirt26, colors: ['black', 'white'] }

];


const categories = [
  {
    name: "Women",
    items: [
      { name: "T-shirt", link: "/t-shirt" },
      { name: "Shirt", link: "/shirt" },
      { name: "Jacket", link: "/jacket" },
      { name: "Skirt", link: "/skirt" },
      { name: "Shorts", link: "/shorts" },
      { name: "Jeans", link: "/jeans" },
      { name: "Trouser", link: "/trouser" },
      { name: "Dress", link: "/dress" },
      { name: "Shoes", link: "/shoes"},
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


const Men_T_shirt = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(new Set());
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const handleProductClick = (product) => {
    // Method 1: Navigate to payment page with product information (current method)
    navigate('/payment', { state: { product } });
    
    // Method 2: Navigate with URL parameter (alternative method - uncomment to use)
    // navigate(`/payment/${product.id}`, { state: { product } });
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
        <div className="women-tshirt-title">T-shirt</div>

        {/* Product Grid */}
        <div className="products-grids">
          {products.map((product) => (
            <div key={product.id} className="product-cards">
              <div className="product-image-containers">
                <div className="discount-badge">{product.discount}%</div>
                <button
                  className={`favorite-btn ${favorites.has(product.id) ? 'active' : ''}`}
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart size={16} fill={favorites.has(product.id) ? '#ef4444' : 'none'} />
                </button>
                
                {/* Current method: Using onClick handler */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-images"
                  onClick={() => handleProductClick(product)}
                  style={{ cursor: 'pointer' }}
                />
                
                {/* Alternative method: Using Link (uncomment to use) */}
                {/* <Link to={`/payment/${product.id}`} state={{ product }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-images"
                  />
                </Link> */}
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="price-container">
                  <span className="sale-price">US ${product.salePrice}</span>
                  <span className="original-price">US ${product.originalPrice}</span>
                </div>
                <div className="color-options">
                  {product.colors.map((color, index) => (
                    <div key={index} className={`color-dot ${color}`}></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>
      <div className="Footer"><Footer /></div>


      
    </div>
  );
};

export default Men_T_shirt;
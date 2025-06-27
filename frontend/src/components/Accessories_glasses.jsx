import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from '../components/Footer';


import accessories_glasses1 from '../assets/glasses1.webp';
import accessories_glasses2 from '../assets/glasses2.webp';
import accessories_glasses3 from '../assets/glasses3.webp';
import accessories_glasses4 from '../assets/glasses4.webp';
import accessories_glasses5 from '../assets/glasses5.webp';
import accessories_glasses6 from '../assets/glasses6.webp';
import accessories_glasses7 from '../assets/glasses7.jpg';
import accessories_glasses8 from '../assets/glasses8.webp';
import accessories_glasses9 from '../assets/glasses9.webp';
import accessories_glasses10 from '../assets/glasses10.webp';
import accessories_glasses11 from '../assets/glasses11.webp';
import accessories_glasses12 from '../assets/glasses12.jpg';
import accessories_glasses13 from '../assets/glasses13.jpg';
import accessories_glasses14 from '../assets/glasses14.jpg';
import accessories_glasses15 from '../assets/glasses15.jpg';
import accessories_glasses16 from '../assets/glasses16.jpg';
import accessories_glasses17 from '../assets/glasses17.jpg';
import accessories_glasses18 from '../assets/glasses18.jpg';
import accessories_glasses19 from '../assets/glasses19.jpg';


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

const products = [
  { id: 1, name: "Retro Round Sunglasses", originalPrice: 29.99, salePrice: 5.99, discount: 80, image: accessories_glasses1, colors: ['black', 'gold'] },
  { id: 2, name: "Classic Aviator Glasses", originalPrice: 34.99, salePrice: 6.99, discount: 80, image: accessories_glasses2, colors: ['silver'] },
  { id: 3, name: "Vintage Oval Frames", originalPrice: 24.99, salePrice: 4.99, discount: 80, image: accessories_glasses3, colors: ['brown'] },
  { id: 4, name: "Cat Eye Sunglasses", originalPrice: 39.99, salePrice: 7.99, discount: 80, image: accessories_glasses4, colors: ['pink', 'black'] },
  { id: 5, name: "Minimalist Clear Glasses", originalPrice: 22.99, salePrice: 4.59, discount: 80, image: accessories_glasses5, colors: ['transparent'] },
  { id: 6, name: "Polarized Sports Glasses", originalPrice: 44.99, salePrice: 8.99, discount: 80, image: accessories_glasses6, colors: ['blue', 'black'] },
  { id: 7, name: "Oversized Fashion Shades", originalPrice: 49.99, salePrice: 9.99, discount: 80, image: accessories_glasses7, colors: ['black', 'white'] },
  { id: 8, name: "Round Metal Frame Glasses", originalPrice: 31.99, salePrice: 6.39, discount: 80, image: accessories_glasses8, colors: ['gold', 'silver'] },
  { id: 9, name: "Wayfarer Style Shades", originalPrice: 27.99, salePrice: 5.59, discount: 80, image: accessories_glasses9, colors: ['black'] },
  { id: 10, name: "Gradient Lens Sunglasses", originalPrice: 35.99, salePrice: 7.19, discount: 80, image: accessories_glasses10, colors: ['brown'] },
  { id: 11, name: "Designer Square Glasses", originalPrice: 42.99, salePrice: 8.59, discount: 80, image: accessories_glasses11, colors: ['black'] },
  { id: 12, name: "Hexagonal Frame Shades", originalPrice: 33.99, salePrice: 6.79, discount: 80, image: accessories_glasses12, colors: ['green'] },
  { id: 13, name: "Sport Wraparound Glasses", originalPrice: 38.99, salePrice: 7.79, discount: 80, image: accessories_glasses13, colors: ['black', 'red'] },
  { id: 14, name: "Transparent Frame Glasses", originalPrice: 30.99, salePrice: 6.19, discount: 80, image: accessories_glasses14, colors: ['clear'] },
  { id: 15, name: "Nerd Style Eyewear", originalPrice: 26.99, salePrice: 5.39, discount: 80, image: accessories_glasses15, colors: ['black', 'blue'] },
  { id: 16, name: "Slim Metal Frame Shades", originalPrice: 28.99, salePrice: 5.79, discount: 80, image: accessories_glasses16, colors: ['silver', 'black'] },
  { id: 17, name: "Mirrored Aviators", originalPrice: 34.99, salePrice: 6.99, discount: 80, image: accessories_glasses17, colors: ['gold', 'blue'] },
  { id: 18, name: "Foldable Travel Glasses", originalPrice: 25.99, salePrice: 5.19, discount: 80, image: accessories_glasses18, colors: ['black'] },
  { id: 19, name: "Luxury Brand Sunglasses", originalPrice: 59.99, salePrice: 11.99, discount: 80, image: accessories_glasses19, colors: ['black', 'brown'] }
];


const Accessories_glasses = () => {
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
              <span className="percentage">80% OFF</span>
              <span className="sale-subtitle">ON MID-YEAR SALE</span>
            </div>
          </div>
        </div>
        <div className="women-tshirt-title">Glasses</div>

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
                <img src={product.image} alt={product.name} className="product-images" />
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

export default Accessories_glasses;
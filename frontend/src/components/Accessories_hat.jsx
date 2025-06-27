import React, { useState } from 'react';
import { Heart, Bell, ShoppingBag } from 'lucide-react';
import { Link } from "react-router-dom";
import '../styles/Women_T_shirt.css';
import Footer from '../components/Footer';

import accessories_hat1 from '../assets/hat1.webp';
import accessories_hat2 from '../assets/hat2.webp';
import accessories_hat3 from '../assets/hat3.webp';
import accessories_hat4 from '../assets/hat4.webp';
import accessories_hat5 from '../assets/hat5.webp';
import accessories_hat6 from '../assets/hat6.jpg';
import accessories_hat7 from '../assets/hat7.jpg';
import accessories_hat8 from '../assets/hat8.jpg';
import accessories_hat9 from '../assets/hat9.jpg';
import accessories_hat10 from '../assets/hat10.jpg';
import accessories_hat11 from '../assets/hat11.jpg';
import accessories_hat12 from '../assets/hat12.jpg';
import accessories_hat13 from '../assets/hat13.jpg';
import accessories_hat14 from '../assets/hat14.jpg';
import accessories_hat15 from '../assets/hat15.jpg';
import accessories_hat16 from '../assets/hat16.jpg';


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
  { id: 1, name: "Classic Fedora Hat", originalPrice: 29.99, salePrice: 20.99, discount: 30, image: accessories_hat1, colors: ['brown', 'black'] },
  { id: 2, name: "Casual Baseball Cap", originalPrice: 19.99, salePrice: 13.99, discount: 30, image: accessories_hat2, colors: ['blue', 'white'] },
  { id: 3, name: "Summer Straw Hat", originalPrice: 24.99, salePrice: 17.49, discount: 30, image: accessories_hat3, colors: ['beige', 'yellow'] },
  { id: 4, name: "Knitted Winter Beanie", originalPrice: 14.99, salePrice: 10.49, discount: 30, image: accessories_hat4, colors: ['grey', 'red'] },
  { id: 5, name: "Bucket Hat", originalPrice: 22.99, salePrice: 16.09, discount: 30, image: accessories_hat5, colors: ['black', 'green'] },
  { id: 6, name: "Trendy Boater Hat", originalPrice: 27.99, salePrice: 19.59, discount: 30, image: accessories_hat6, colors: ['white', 'navy'] },
  { id: 7, name: "Safari Adventure Hat", originalPrice: 34.99, salePrice: 24.49, discount: 30, image: accessories_hat7, colors: ['khaki'] },
  { id: 8, name: "Denim Baseball Cap", originalPrice: 18.99, salePrice: 13.29, discount: 30, image: accessories_hat8, colors: ['blue'] },
  { id: 9, name: "Floppy Beach Hat", originalPrice: 26.99, salePrice: 18.89, discount: 30, image: accessories_hat9, colors: ['pink', 'beige'] },
  { id: 10, name: "Trucker Cap", originalPrice: 20.99, salePrice: 14.69, discount: 30, image: accessories_hat10, colors: ['red', 'black'] },
  { id: 11, name: "Embroidered Snapback", originalPrice: 32.99, salePrice: 23.09, discount: 30, image: accessories_hat11, colors: ['black'] },
  { id: 12, name: "Faux Fur Winter Hat", originalPrice: 37.99, salePrice: 26.59, discount: 30, image: accessories_hat12, colors: ['white', 'grey'] },
  { id: 13, name: "Sun Protection Hat", originalPrice: 25.99, salePrice: 18.19, discount: 30, image: accessories_hat13, colors: ['light blue'] },
  { id: 14, name: "Classic Flat Cap", originalPrice: 28.99, salePrice: 20.29, discount: 30, image: accessories_hat14, colors: ['brown'] },
  { id: 15, name: "Wide Brim Hat", originalPrice: 33.99, salePrice: 23.79, discount: 30, image: accessories_hat15, colors: ['cream', 'tan'] },
  { id: 16, name: "Outdoor Hiking Hat", originalPrice: 31.99, salePrice: 22.39, discount: 30, image: accessories_hat16, colors: ['olive', 'grey'] }
];


const Accessories_hat = () => {
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
              <span className="percentage">30% OFF</span>
              <span className="sale-subtitle">ON MID-YEAR SALE</span>
            </div>
          </div>
        </div>
        <div className="women-tshirt-title">Hat</div>

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

export default Accessories_hat;
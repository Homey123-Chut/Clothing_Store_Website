import React, { useState, useEffect } from "react";
import { Bell, Heart, ShoppingBag, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Homepage.css";
import bannerImg from '../assets/10.jpg';
import apiService from '../services/api';

const staticCategories = [
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


function Homepage() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [categories, setCategories] = useState(staticCategories); // Initialize with static categories
  const [_loading, setLoading] = useState(true); // Prefix with underscore to avoid unused warning
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (err) {
        console.error('Error parsing user data:', err);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
  }, []);

  const handleLogout = () => {
    apiService.logout();
    setUser(null);
    navigate('/');
  };

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await apiService.getCategories();

        // Transform API response to match the expected format
        const transformedCategories = response.map(category => ({
          name: category.name,
          items: category.subcategories?.map(sub => ({
            name: sub.name.replace(`${category.name} `, ''), // Remove parent name prefix
            link: `/${sub.slug.replace(`${category.slug}-`, '')}`
          })) || []
        }));

        // Sort categories to ensure Women comes first, then the rest
        const sortedCategories = transformedCategories.sort((a, b) => {
          if (a.name === 'Women') return -1;
          if (b.name === 'Women') return 1;
          if (a.name === 'Men') return -1;
          if (b.name === 'Men') return 1;
          if (a.name === 'Girls') return -1;
          if (b.name === 'Girls') return 1;
          if (a.name === 'Boys') return -1;
          if (b.name === 'Boys') return 1;
          return 0; // Accessories and others stay at the end
        });

        setCategories(sortedCategories);
      } catch (err) {
        console.error('Error fetching categories:', err);
        // Keep using static categories if API fails (already initialized)
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="homepage-container">
      {/* Header */}
      <div className="header">
        {/* Logo */}
        <div className="logo-container">
           <Link to="/" className="logo-bg">
            <span className="logo-text">
              <span className="logo-star">★</span>
              StyleStore
            </span>
          </Link>
        </div>
        {/* Search + Icons + Login/Register */}
        <div className="header-right">
          <div className="header-row">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            />
            {/* Icons area */}
            <div className="icons-area">
              <Bell size={20} className="text-black" />
              <Heart size={20} className="text-black" />
              <div className="shopping-bag-rel">
                <ShoppingBag size={22} className="text-black" />
                <span className="shopping-bag-badge">0</span>
              </div>
              
              {/* User Authentication Section */}
              {user ? (
                <div className="user-section" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div className="user-info" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <User size={20} className="text-black" />
                    <span style={{ color: '#000', fontSize: '14px' }}>
                      Hi, {user.name}
                    </span>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="logout-btn"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      color: '#ef4444'
                    }}
                  >
                    <LogOut size={16} />
                    <span style={{ fontSize: '12px' }}>Logout</span>
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login" className="login-link">LOGIN</Link>
                  <Link to="/register" className="register-link">REGISTER</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Category Nav with Dropdowns and Links */}
      <div className="category-nav">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`category-group${openDropdown === cat.name ? " open" : ""}`}
            onMouseEnter={() => cat.items && setOpenDropdown(cat.name)}
            onMouseLeave={() => cat.items && setOpenDropdown(null)}
          >
            {cat.items ? (
              <button
                className={`category-btn${cat.name === "Women" ? " women" : ""}`}
                style={{ fontWeight: 700 }}
                onClick={() => setOpenDropdown(cat.name === openDropdown ? null : cat.name)}
                type="button"
              >
                {cat.name}
              </button>
            ) : (
              <Link
                to={cat.link || '#'}
                className="category-btn"
                style={{ fontWeight: 700, textDecoration: "none", display: "inline-block" }}
              >
                {cat.name}
              </Link>
            )}
            {/* Dropdown for categories with items */}
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

      <div className="Banner">
        <img src={bannerImg} alt="Banner" />
      </div>
    </div>
  );
}

export default Homepage;
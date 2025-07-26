import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Heart } from 'lucide-react';
import apiService from '../services/api';
import '../styles/CategoryProducts.css';

const CategoryProducts = () => {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Create search parameters based on category and subcategory
        const params = {};
        
        if (category) {
          // Map URL categories to database categories
          const categoryMap = {
            'men': 'Men',
            'women': 'Women',
            'girls': 'Girls',
            'boys': 'Boys',
            'accessories': 'Accessories'
          };
          params.category = categoryMap[category] || category;
        }
        
        if (subcategory) {
          // Map subcategories
          const subcategoryMap = {
            't-shirt': 'T-shirt',
            'jeans': 'Jeans',
            'jacket': 'Jacket',
            'shirt': 'Shirt',
            'trouser': 'Trouser',
            'shoes': 'Shoes',
            'dress': 'Dress',
            'skirt': 'Skirt',
            'shorts': 'Shorts',
            'belt': 'Belt',
            'bag': 'Bag',
            'glasses': 'Glasses',
            'watches': 'Watches',
            'gloves': 'Gloves',
            'hat': 'Hat',
            'wallet': 'Wallet',
            'clothing': 'Clothing'
          };
          params.subcategory = subcategoryMap[subcategory] || subcategory;
        }

        console.log('Fetching products with params:', params);
        const response = await apiService.getProducts(params);
        
        if (response && response.products) {
          setProducts(response.products);
        } else {
          setProducts(response || []);
        }
        
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, subcategory]);

  const retryFetch = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Create search parameters based on category and subcategory
      const params = {};
      
      if (category) {
        // Map URL categories to database categories
        const categoryMap = {
          'men': 'Men',
          'women': 'Women',
          'girls': 'Girls',
          'boys': 'Boys',
          'accessories': 'Accessories'
        };
        params.category = categoryMap[category] || category;
      }
      
      if (subcategory) {
        // Map subcategories
        const subcategoryMap = {
          't-shirt': 'T-shirt',
          'jeans': 'Jeans',
          'jacket': 'Jacket',
          'shirt': 'Shirt',
          'trouser': 'Trouser',
          'shoes': 'Shoes',
          'dress': 'Dress',
          'skirt': 'Skirt',
          'shorts': 'Shorts',
          'belt': 'Belt',
          'bag': 'Bag',
          'glasses': 'Glasses',
          'watches': 'Watches',
          'gloves': 'Gloves',
          'hat': 'Hat',
          'wallet': 'Wallet',
          'clothing': 'Clothing'
        };
        params.subcategory = subcategoryMap[subcategory] || subcategory;
      }

      console.log('Fetching products with params:', params);
      const response = await apiService.getProducts(params);
      
      if (response && response.products) {
        setProducts(response.products);
      } else {
        setProducts(response || []);
      }
      
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { 
      state: { 
        product,
        category,
        subcategory 
      } 
    });
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    // TODO: Implement add to cart functionality
    console.log('Add to cart:', product);
  };

  const handleAddToWishlist = (e, product) => {
    e.stopPropagation();
    // TODO: Implement add to wishlist functionality
    console.log('Add to wishlist:', product);
  };

  const getCategoryTitle = () => {
    const categoryTitles = {
      'men': 'Men\'s',
      'women': 'Women\'s',
      'girls': 'Girls\'',
      'boys': 'Boys\'',
      'accessories': 'Accessories'
    };
    
    const categoryTitle = categoryTitles[category] || category;
    const subcategoryTitle = subcategory ? subcategory.charAt(0).toUpperCase() + subcategory.slice(1) : '';
    
    return subcategoryTitle ? `${categoryTitle} ${subcategoryTitle}` : categoryTitle;
  };

  if (loading) {
    return (
      <div className="category-products-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="category-products-container">
        <div className="error-container">
          <p className="error-message">{error}</p>
          <button onClick={retryFetch} className="retry-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="category-products-container">
      {/* Header */}
      <div className="category-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={20} />
          Back
        </button>
        <h1 className="category-title">{getCategoryTitle()}</h1>
        <p className="products-count">{products.length} products found</p>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="products-grid">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              <div className="product-image-container">
                <img 
                  src={product.images?.[0] || '/placeholder-image.jpg'} 
                  alt={product.name}
                  className="product-image"
                />
                {product.discount > 0 && (
                  <span className="discount-badge">-{product.discount}%</span>
                )}
                <div className="product-actions">
                  <button 
                    onClick={(e) => handleAddToWishlist(e, product)}
                    className="action-btn wishlist-btn"
                    title="Add to Wishlist"
                  >
                    <Heart size={18} />
                  </button>
                  <button 
                    onClick={(e) => handleAddToCart(e, product)}
                    className="action-btn cart-btn"
                    title="Add to Cart"
                  >
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">
                  <span className="sale-price">${product.salePrice}</span>
                  {product.originalPrice > product.salePrice && (
                    <span className="original-price">${product.originalPrice}</span>
                  )}
                </div>
                {product.colors && product.colors.length > 0 && (
                  <div className="product-colors">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <span 
                        key={index} 
                        className="color-dot" 
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      />
                    ))}
                    {product.colors.length > 3 && (
                      <span className="more-colors">+{product.colors.length - 3}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-products">
          <p>No products found in this category.</p>
          <button onClick={() => navigate('/')} className="continue-shopping-btn">
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;

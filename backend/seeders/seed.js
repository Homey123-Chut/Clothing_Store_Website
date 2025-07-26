require('dotenv').config();
const { sequelize } = require('../config/database');
const { Category, Product, User } = require('../models');

// Helper function to generate slug from name
const generateSlug = (name) => {
  return name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-');
};

// Categories data matching frontend structure
const categoriesData = [
  {
    name: 'Women',
    description: 'Women\'s clothing and accessories',
    slug: 'women',
    isActive: true,
    subcategories: [
      { name: 'Women T-shirt', slug: 'women-t-shirt' },
      { name: 'Women Shirt', slug: 'women-shirt' },
      { name: 'Women Jacket', slug: 'women-jacket' },
      { name: 'Women Skirt', slug: 'women-skirt' },
      { name: 'Women Shorts', slug: 'women-shorts' },
      { name: 'Women Jeans', slug: 'women-jeans' },
      { name: 'Women Trouser', slug: 'women-trouser' },
      { name: 'Women Dress', slug: 'women-dress' },
      { name: 'Women Shoes', slug: 'women-shoes' }
    ]
  },
  {
    name: 'Men',
    description: 'Men\'s clothing and accessories',
    slug: 'men',
    isActive: true,
    subcategories: [
      { name: 'Men T-shirt', slug: 'men-t-shirt' },
      { name: 'Men Jeans', slug: 'men-jeans' },
      { name: 'Men Jacket', slug: 'men-jacket' },
      { name: 'Men Trouser', slug: 'men-trouser' },
      { name: 'Men Shirt', slug: 'men-shirt' },
      { name: 'Men Shoes', slug: 'men-shoes' }
    ]
  },
  {
    name: 'Girls',
    description: 'Girls\' clothing and accessories',
    slug: 'girls',
    isActive: true,
    subcategories: [
      { name: 'Girls Clothing', slug: 'girls-clothing' },
      { name: 'Girls Shoes', slug: 'girls-shoes' }
    ]
  },
  {
    name: 'Boys',
    description: 'Boys\' clothing and accessories',
    slug: 'boys',
    isActive: true,
    subcategories: [
      { name: 'Boys Clothing', slug: 'boys-clothing' },
      { name: 'Boys Shoes', slug: 'boys-shoes' }
    ]
  },
  {
    name: 'Accessories',
    description: 'Fashion accessories',
    slug: 'accessories',
    isActive: true,
    subcategories: [
      { name: 'Glasses', slug: 'glasses' },
      { name: 'Watches', slug: 'watches' },
      { name: 'Gloves', slug: 'gloves' },
      { name: 'Belt', slug: 'belt' },
      { name: 'Hat', slug: 'hat' },
      { name: 'Bag', slug: 'bag' },
      { name: 'Wallet', slug: 'wallet' }
    ]
  }
];

// Sample products data for Women's T-shirts (matching frontend static data)
const womenTshirtProducts = [
  {
    name: "Regular Fitted Crop T-Shirt",
    description: "A comfortable and stylish fitted crop t-shirt perfect for casual wear. Made from high-quality cotton blend fabric.",
    originalPrice: 39.99,
    salePrice: 27.99,
    discount: 30,
    colors: ['white', 'red'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 50,
    sku: 'WTS001',
    slug: 'regular-fitted-crop-t-shirt',
    brand: 'StyleStore',
    material: 'Cotton Blend',
    tags: ['casual', 'crop', 'fitted'],
    images: ['/uploads/women_shirt42.jpg'],
    isFeatured: true
  },
  {
    name: "Regular Crop Textured T-Shirt",
    description: "Trendy textured crop t-shirt with a modern fit. Perfect for layering or wearing on its own.",
    originalPrice: 44.99,
    salePrice: 31.49,
    discount: 30,
    colors: ['pink'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 45,
    sku: 'WTS002',
    slug: 'regular-crop-textured-t-shirt',
    brand: 'StyleStore',
    material: 'Cotton Blend',
    tags: ['casual', 'crop', 'textured'],
    images: ['/uploads/women_shirt39.jpg'],
    isFeatured: false
  },
  {
    name: "Regular V-Neck T-Shirt",
    description: "Classic v-neck t-shirt with a flattering cut. Essential wardrobe piece for every woman.",
    originalPrice: 49.99,
    salePrice: 34.99,
    discount: 30,
    colors: ['beige'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 60,
    sku: 'WTS003',
    slug: 'regular-v-neck-t-shirt',
    brand: 'StyleStore',
    material: 'Cotton',
    tags: ['casual', 'v-neck', 'classic'],
    images: ['/uploads/women_shirt7.jpg'],
    isFeatured: true
  },
  {
    name: "Regular Polo T-Shirt",
    description: "Sophisticated polo t-shirt suitable for both casual and semi-formal occasions.",
    originalPrice: 54.99,
    salePrice: 38.49,
    discount: 30,
    colors: ['navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 40,
    sku: 'WTS004',
    slug: 'regular-polo-t-shirt',
    brand: 'StyleStore',
    material: 'Cotton Pique',
    tags: ['polo', 'smart-casual', 'navy'],
    images: ['/uploads/women_shirt29.jpg'],
    isFeatured: false
  },
  {
    name: "Basic Fitted Crop T-Shirt",
    description: "Essential basic fitted crop t-shirt in versatile colors. Perfect for everyday wear.",
    originalPrice: 39.99,
    salePrice: 27.99,
    discount: 30,
    colors: ['white', 'red'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    stock: 55,
    sku: 'WTS005',
    slug: 'basic-fitted-crop-t-shirt',
    brand: 'StyleStore',
    material: 'Cotton Blend',
    tags: ['basic', 'crop', 'fitted'],
    images: ['/uploads/women_shirt5.jpg'],
    isFeatured: false
  }
];

// Sample products for Men's T-shirts
const menTshirtProducts = [
  {
    name: "Men's Classic Crew Neck T-Shirt",
    description: "Classic crew neck t-shirt for men. Comfortable fit and durable fabric.",
    originalPrice: 29.99,
    salePrice: 20.99,
    discount: 30,
    colors: ['black', 'white', 'grey'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 75,
    sku: 'MTS001',
    slug: 'mens-classic-crew-neck-t-shirt',
    brand: 'StyleStore',
    material: 'Cotton',
    tags: ['casual', 'crew-neck', 'classic'],
    images: ['/uploads/men_tshirt1.jpg'],
    isFeatured: true
  },
  {
    name: "Men's V-Neck T-Shirt",
    description: "Stylish v-neck t-shirt perfect for layering or wearing alone.",
    originalPrice: 32.99,
    salePrice: 23.09,
    discount: 30,
    colors: ['navy', 'white', 'black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 60,
    sku: 'MTS002',
    slug: 'mens-v-neck-t-shirt',
    brand: 'StyleStore',
    material: 'Cotton Blend',
    tags: ['casual', 'v-neck', 'layering'],
    images: ['/uploads/men_tshirt2.jpg'],
    isFeatured: false
  }
];

// Sample products for Accessories
const accessoryProducts = [
  {
    name: "Classic Aviator Sunglasses",
    description: "Timeless aviator sunglasses with UV protection. Perfect for any occasion.",
    originalPrice: 89.99,
    salePrice: 62.99,
    discount: 30,
    colors: ['gold', 'silver', 'black'],
    sizes: ['One Size'],
    stock: 30,
    sku: 'ACC001',
    slug: 'classic-aviator-sunglasses',
    brand: 'StyleStore',
    material: 'Metal Frame',
    tags: ['sunglasses', 'aviator', 'uv-protection'],
    images: ['/uploads/glasses1.jpg'],
    isFeatured: true
  },
  {
    name: "Leather Crossbody Bag",
    description: "Elegant leather crossbody bag perfect for daily use. Multiple compartments for organization.",
    originalPrice: 129.99,
    salePrice: 90.99,
    discount: 30,
    colors: ['brown', 'black', 'tan'],
    sizes: ['One Size'],
    stock: 25,
    sku: 'ACC002',
    slug: 'leather-crossbody-bag',
    brand: 'StyleStore',
    material: 'Genuine Leather',
    tags: ['bag', 'crossbody', 'leather'],
    images: ['/uploads/bag1.jpg'],
    isFeatured: true
  }
];

const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Connect to database
    await sequelize.authenticate();
    console.log('✅ Database connected');
    
    // Sync database (create tables)
    await sequelize.sync({ force: true }); // This will drop and recreate tables
    console.log('✅ Database tables synchronized');
    
    // Create admin user
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@stylestore.com',
      password: 'admin123', // This will be hashed by the model
      role: 'admin',
      isActive: true
    });
    console.log('✅ Admin user created');
    
    // Create categories and subcategories
    for (const categoryData of categoriesData) {
      const { subcategories, ...mainCategoryData } = categoryData;
      
      // Create main category
      const category = await Category.create(mainCategoryData);
      console.log(`✅ Created category: ${category.name}`);
      
      // Create subcategories
      for (const subCategoryData of subcategories) {
        const subcategory = await Category.create({
          ...subCategoryData,
          description: `${subCategoryData.name} in ${category.name} category`,
          parentId: category.id,
          isActive: true
        });
        console.log(`  ✅ Created subcategory: ${subcategory.name}`);
      }
    }
    
    // Get categories for products
    const womenCategory = await Category.findOne({ where: { slug: 'women' } });
    const menCategory = await Category.findOne({ where: { slug: 'men' } });
    const accessoriesCategory = await Category.findOne({ where: { slug: 'accessories' } });

    // Get subcategories
    const womenTshirtSubcategory = await Category.findOne({ where: { slug: 'women-t-shirt' } });
    const menTshirtSubcategory = await Category.findOne({ where: { slug: 'men-t-shirt' } });
    const glassesSubcategory = await Category.findOne({ where: { slug: 'glasses' } });
    const bagSubcategory = await Category.findOne({ where: { slug: 'bag' } });

    // Create sample products for Women's T-shirts
    for (const productData of womenTshirtProducts) {
      const product = await Product.create({
        ...productData,
        categoryId: womenCategory.id,
        subcategoryId: womenTshirtSubcategory.id
      });
      console.log(`✅ Created product: ${product.name}`);
    }

    // Create sample products for Men's T-shirts
    for (const productData of menTshirtProducts) {
      const product = await Product.create({
        ...productData,
        categoryId: menCategory.id,
        subcategoryId: menTshirtSubcategory.id
      });
      console.log(`✅ Created product: ${product.name}`);
    }

    // Create sample accessory products
    for (let i = 0; i < accessoryProducts.length; i++) {
      const productData = accessoryProducts[i];
      const subcategoryId = i === 0 ? glassesSubcategory.id : bagSubcategory.id;

      const product = await Product.create({
        ...productData,
        categoryId: accessoriesCategory.id,
        subcategoryId: subcategoryId
      });
      console.log(`✅ Created product: ${product.name}`);
    }

    const totalProducts = womenTshirtProducts.length + menTshirtProducts.length + accessoryProducts.length;

    console.log('🎉 Database seeding completed successfully!');
    console.log(`
📊 Summary:
- Categories: ${categoriesData.length}
- Subcategories: ${categoriesData.reduce((sum, cat) => sum + cat.subcategories.length, 0)}
- Products: ${totalProducts}
- Users: 1 (admin)
    `);
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
};

// Run seeder if called directly
if (require.main === module) {
  seedDatabase()
    .then(() => {
      console.log('✅ Seeding completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Seeding failed:', error);
      process.exit(1);
    });
}

module.exports = { seedDatabase };

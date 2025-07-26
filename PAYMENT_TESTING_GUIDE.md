# Payment Testing Guide

## How to Test the Payment Functionality

### 1. Start the Application

#### Backend:
```bash
cd backend
npm run dev
```

#### Frontend:
```bash
cd frontend
npm run dev
```

### 2. Access the Test Page

Navigate to: `http://localhost:5173/test-payment`

### 3. Test Scenarios

#### Scenario 1: Basic Payment Flow
1. Click on the "Rushed Fit T-shirt" image
2. Payment modal should open
3. Verify default values:
   - Color: black (first color in array)
   - Size: XS (first size in array)
   - Quantity: 1
4. Check price calculation:
   - Original: $27.18
   - Sale: $13.59
   - Discount: 50%

#### Scenario 2: Color Selection
1. Open any product payment modal
2. Click different color options
3. Verify color selection updates
4. Colors should highlight when selected

#### Scenario 3: Size Selection
1. Open payment modal for "Running Shoes"
2. Change size from dropdown (6, 7, 8, 9, 10, 11)
3. Verify size updates correctly

#### Scenario 4: Quantity Changes
1. Open any product payment modal
2. Click + button to increase quantity
3. Click - button to decrease quantity
4. Verify:
   - Cannot go below 1
   - Total price updates correctly
   - Savings calculation updates

#### Scenario 5: Different Product Types
Test with different products to verify:
- **T-shirt**: XS, S, M, L, XL sizes
- **Shoes**: Numeric sizes (6-11)
- **Handbag**: One Size only
- **Various price ranges**: $34.99 - $64.99

#### Scenario 6: Price Calculations
For "Leather Handbag" (most expensive):
- Original: $129.99
- Sale: $64.99
- Quantity: 3
- Expected calculations:
  - Total: $389.97
  - Save: $195.00
  - Delivery: $1.25
  - Amount to pay: $196.22

#### Scenario 7: Modal Interactions
1. Open payment modal
2. Click X button to close
3. Click outside modal (overlay) to close
4. Verify modal closes properly

#### Scenario 8: Responsive Design
Test on different screen sizes:
- Desktop (1200px+)
- Tablet (768px-1199px)
- Mobile (480px-767px)

### 4. Frontend Testing Without Backend

If backend is not running, the payment modal will still work with static data:
- All UI interactions function
- Price calculations work
- Color/size selection works
- Only API calls (if any) will fail

### 5. Integration Testing

#### With Real Backend:
1. Ensure backend server is running on port 5000
2. Test product detail page: `/product/1`
3. Test adding to cart functionality
4. Verify API endpoints respond correctly

### 6. Error Testing

#### Test Error Scenarios:
1. Try to decrease quantity below 1 (should be disabled)
2. Open payment with missing product data
3. Test with slow internet connection
4. Test with backend server down

### 7. Browser Compatibility

Test in different browsers:
- Chrome
- Firefox
- Safari
- Edge

### 8. Performance Testing

1. Open multiple payment modals quickly
2. Test with large product images
3. Monitor console for errors
4. Check for memory leaks

## Expected Results

✅ **Success Criteria:**
- Payment modal opens smoothly
- All calculations are correct
- Color/size selection works
- Quantity controls function properly
- Modal closes correctly
- Responsive design works
- No console errors
- Smooth animations

❌ **Failure Indicators:**
- Modal doesn't open
- Incorrect price calculations
- Color/size selection broken
- Quantity buttons not working
- Modal doesn't close
- Console errors
- Poor mobile experience

## Demo Data

The test page includes 6 sample products with:
- Various price ranges ($34.99 - $64.99)
- Different color options
- Different size configurations
- High-quality placeholder images from Unsplash
- Complete product information

## Quick Test Commands

```bash
# Install dependencies
npm install

# Start frontend development server
npm run dev

# Build for production
npm run build

# Run tests (if configured)
npm test
```

## Troubleshooting

### Common Issues:

1. **Modal not opening**: Check console for JavaScript errors
2. **Images not loading**: Verify internet connection for Unsplash images
3. **Styling issues**: Ensure CSS files are properly imported
4. **Calculation errors**: Check numeric data types in product objects

### Debug Mode:

Add to browser console to see payment data:
```javascript
// Monitor payment interactions
window.addEventListener('click', function(e) {
  if (e.target.classList.contains('product-images')) {
    console.log('Product clicked for payment');
  }
});
```

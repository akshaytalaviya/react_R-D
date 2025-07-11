# FakeStore API Product Catalog

A beautiful and modern web application that displays products from the FakeStoreAPI with advanced filtering and search capabilities.

## 🚀 Features

- **Product Display**: Beautiful grid layout showing all products from FakeStoreAPI
- **Search Functionality**: Real-time search through product titles and descriptions
- **Category Filtering**: Filter products by category (electronics, clothing, etc.)
- **Product Details**: Click on any product to view detailed information in a modal
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations
- **Rating Display**: Visual star ratings for each product
- **Error Handling**: Graceful error handling with user-friendly messages

## 🛠️ Technologies Used

- **Backend**: Node.js with Express.js
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **API**: FakeStoreAPI (https://fakestoreapi.com/)
- **Styling**: Custom CSS with gradients and animations
- **Icons**: Font Awesome

## 📦 Installation

1. **Clone or download the project**
2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🚀 Running the Application

1. **Start the server**:
   ```bash
   npm start
   ```

2. **Open your browser** and visit:
   ```
   http://localhost:4000
   ```

## 📋 API Endpoints

The application provides the following API endpoints:

- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Fetch a specific product by ID
- `GET /api/categories` - Fetch all product categories
- `GET /api/products/category/:category` - Fetch products by category

## 🎯 How to Use

1. **View Products**: All products are displayed in a beautiful grid layout
2. **Search**: Use the search box to find products by title or description
3. **Filter by Category**: Use the category dropdown to filter products
4. **View Details**: Click "View Details" on any product card to see full information
5. **Refresh**: Click the "Refresh" button to reload all products

## 🎨 Features Explained

### Product Cards
Each product card displays:
- Product image
- Category
- Title
- Price
- Star rating
- Review count
- Brief description

### Search & Filter
- **Real-time search**: Type to instantly filter products
- **Category filter**: Select a category to show only those products
- **Combined filtering**: Search and category filters work together

### Product Details Modal
Clicking "View Details" opens a modal with:
- Large product image
- Full product title
- Complete description
- Detailed statistics (ID, category, rating, reviews)

## 🔧 Customization

### Changing the Port
Edit the `index.js` file and modify:
```javascript
const port = process.env.PORT || 4000;
```

### Styling
All styles are in the `<style>` section of `public/index.html`. You can modify:
- Colors and gradients
- Card layouts
- Animations
- Responsive breakpoints

## 🌐 API Information

This application uses the **FakeStoreAPI** which provides:
- 20+ products across different categories
- Real product data with images, prices, and ratings
- Categories: electronics, clothing, jewelry, etc.
- Free to use, no authentication required

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🐛 Troubleshooting

### Common Issues:

1. **Port already in use**:
   - Change the port in `index.js`
   - Or kill the process using the port

2. **Products not loading**:
   - Check your internet connection
   - Verify FakeStoreAPI is accessible
   - Check browser console for errors

3. **Images not loading**:
   - Some product images might be unavailable
   - The app shows placeholder images for broken links

## 📄 License

This project is open source and available under the ISC License.

## 👨‍💻 Author

Created by Akshay Talaviya

---

**Enjoy exploring the FakeStore API Product Catalog! 🛍️**
# Perfume E-Commerce - Team Development Guide

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   └── Navbar.jsx      # Navigation bar (✅ Complete)
├── pages/              # Page components
│   ├── Home.jsx        # Home page (✅ Basic structure)
│   ├── Products.jsx    # Product listing (🔨 Needs API integration)
│   ├── ProductDetails.jsx  # Single product view (🔨 Needs development)
│   ├── Cart.jsx        # Shopping cart (🔨 Needs development)
│   └── About.jsx       # About page (✅ Basic structure)
├── App.jsx             # Main app with routes (✅ Complete)
└── main.jsx            # Entry point (✅ Complete)
```

## 🛣️ Routes Configured

- `/` - Home page
- `/products` - All products listing
- `/product/:id` - Individual product details
- `/cart` - Shopping cart
- `/about` - About page

## 📋 Team Tasks - Deadline: 22/11

### Priority 1: Core Features

1. **Products Page** (`src/pages/Products.jsx`)

   - [ ] Fetch products from API: `https://dummyjson.com/products`
   - [ ] Display products in grid layout (Bootstrap Cards)
   - [ ] Add category filtering
   - [ ] Add search functionality
   - [ ] Link to product details page

2. **Product Details Page** (`src/pages/ProductDetails.jsx`)

   - [ ] Fetch single product: `https://dummyjson.com/products/{id}`
   - [ ] Display product images, title, description, price
   - [ ] Add "Add to Cart" button
   - [ ] Show product rating and reviews

3. **Shopping Cart** (`src/pages/Cart.jsx`)
   - [ ] Create cart context/state management
   - [ ] Display cart items
   - [ ] Update quantities
   - [ ] Calculate totals
   - [ ] Checkout button

### Priority 2: Components to Create

4. **Product Card Component** (`src/components/ProductCard.jsx`)

   - Reusable card for displaying products
   - Props: product data
   - Shows: image, title, price, "View Details" button

5. **Cart Context** (`src/context/CartContext.jsx`)

   - Global cart state
   - Functions: addToCart, removeFromCart, updateQuantity, clearCart

6. **Footer Component** (`src/components/Footer.jsx`)
   - Contact info
   - Social links
   - Copyright

### Priority 3: Authentication

7. **Clerk Integration**
   - [ ] Install: `npm install @clerk/clerk-react`
   - [ ] Set up Clerk account and get API keys
   - [ ] Wrap app with ClerkProvider
   - [ ] Add Sign In / Sign Up buttons to Navbar
   - [ ] Protect cart/checkout routes

## 🔧 Technologies Used

- **React** - UI framework
- **React Router** - Navigation (✅ Configured)
- **Bootstrap & React-Bootstrap** - Styling (✅ Installed)
- **Clerk** - Authentication (⏳ To be installed)
- **DummyJSON API** - Product data

## 💡 Development Tips

### Fetching Products Example

```jsx
import { useState, useEffect } from 'react'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    // Render products here
  )
}
```

### Using React Router Navigation

```jsx
import { Link, useNavigate, useParams } from "react-router-dom";

// Link to another page
<Link to="/products">View Products</Link>;

// Get URL parameter
const { id } = useParams();

// Programmatic navigation
const navigate = useNavigate();
navigate("/cart");
```

### Bootstrap Components

```jsx
import { Container, Row, Col, Card, Button } from "react-bootstrap";

<Container>
  <Row>
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>;
```

## 🎯 API Endpoints

- All products: `https://dummyjson.com/products`
- Single product: `https://dummyjson.com/products/{id}`
- Search: `https://dummyjson.com/products/search?q={query}`
- Categories: `https://dummyjson.com/products/categories`
- By category: `https://dummyjson.com/products/category/{category}`

## 📞 Questions?

Contact team leader for any clarifications.

**Let's build something great! 🚀**

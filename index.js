require('dotenv').config()
const express = require('express')
const path = require('path')
const fetch = require('node-fetch')

const app = express()

const port = process.env.PORT || 4000

// Middleware
app.use(express.json())
app.use(express.static('public'))

// Serve the main HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// API endpoint to fetch products from FakeStoreAPI
app.get('/api/products', async (req, res) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    const products = await response.json()
    res.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    res.status(500).json({ error: 'Failed to fetch products' })
  }
})

// API endpoint to fetch a single product
app.get('/api/products/:id', async (req, res) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${req.params.id}`)
    const product = await response.json()
    res.json(product)
  } catch (error) {
    console.error('Error fetching product:', error)
    res.status(500).json({ error: 'Failed to fetch product' })
  }
})

// API endpoint to fetch categories
app.get('/api/categories', async (req, res) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const categories = await response.json()
    res.json(categories)
  } catch (error) {
    console.error('Error fetching categories:', error)
    res.status(500).json({ error: 'Failed to fetch categories' })
  }
})

// API endpoint to fetch products by category
app.get('/api/products/category/:category', async (req, res) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/category/${req.params.category}`)
    const products = await response.json()
    res.json(products)
  } catch (error) {
    console.error('Error fetching products by category:', error)
    res.status(500).json({ error: 'Failed to fetch products by category' })
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
  console.log(`Visit http://localhost:${port} to view the application`)
})
 
const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./config')

app.use(cors())
app.use(express.static('server/public'))

const products = require('./data/products')
const categories = require('./data/categories')
const cart = []

app.get('/products',(req,res) => {
    res.json(products)
})

app.get('/product/:id',(req,res) => {
    const product = products[req.params.id]
    res.json(product)
})

app.get('/categories',(req,res) => {
    res.json(categories.map(category => {
        return {
            ...category,
            products: category.products.map(productId => products[productId])
        }
    }))
})

app.get('/category/:id',(req,res) => {
    const category = categories[req.params.id]
    category.products = category.products.map(productId => products[productId])
    res.json(category)
})

app.get('/cart/add/:id/:quantity',(req,res) => {
    cart.push({
        id: req.params.id,
        quantity: req.params.quantity
    })
    res.json(cart)
})

app.get('/cart/remove/:index',(req,res) => {
    cart.splice(req.params.index,1)
    res.json(cart)
})

app.get('/cart/clear',(req,res) => {
    cart.splice(0,cart.length)
    res.json(cart)
})

app.get('/cart',(req,res) => {
    res.json({
        items: cart.map(item => ({product:products[item.id],quantity:item.quantity})),
        total: cart.reduce((total,item) => total + (products[item.id].price * item.quantity),0)
    })
})

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`)
})
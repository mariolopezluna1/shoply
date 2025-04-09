const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Stripe = require('stripe');
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');
const checkoutRoutes = require('./routes/checkout');

const app = express();
const stripe = Stripe('your_stripe_secret_key');

mongoose.connect('mongodb://localhost:27017/shoply');

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/checkout', checkoutRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));

const express = require('express');
const connectDB = require('./config');
const mongoose = require('mongoose');
require('dotenv').config(); 

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');


const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connect to MongoDB'))
    .catch((err) => console.log('Could not connect to MongoDB:',err));
    
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5200;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

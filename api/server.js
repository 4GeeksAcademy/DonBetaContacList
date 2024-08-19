const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');
const { protect } = require('./middleware/auth');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// seria mi ruta de auth
app.use('/api/auth', authRoutes);

// Rutas para mis contactos 
app.use('/api/contacts', protect, contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
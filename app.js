const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const clientRoutes = require('./routes/clientRoutes');
const stockRoutes = require('./routes/stockRoutes');

const app = express();

app.use(express.json());

app.use('/school-canteen/auth', authRoutes);
app.use('/school-canteen/users', userRoutes);
app.use('/school-canteen/clients', clientRoutes);
app.use('/school-canteen/stocks', stockRoutes);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.log(err));

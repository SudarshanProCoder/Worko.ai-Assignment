const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const basicAuth = require('./middleware/authMiddleware');

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());

app.use(basicAuth);

app.use('/worko', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

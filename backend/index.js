import express from 'express';
import connectDb from './src/utils/db.config';
import { configDotenv } from 'dotenv';
import dotenv from 'dotenv';

dotenv.config();
const app = express();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port 3000");
});
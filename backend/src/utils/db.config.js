import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`DB Connected ${connect.connection.host}`);
    } catch (error) {
        console.error(` Error: ${error.message}`);
    }
};

export default connectDb;
import mongoose from 'mongoose';

export const connectDB = async (mongoUri) => {
    if (!mongoUri) {
        throw new Error('MongoDB connection string is missing. Check DB_USER and DB_PASSWORD in .env.');
    }

    const conn = await mongoose.connect(mongoUri);

    console.log(`MongoDB connected: ${conn.connection.host}/${conn.connection.name}`);
};

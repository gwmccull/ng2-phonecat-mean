import mongoose from 'mongoose';

export default function(callback) {
    // connect to a database if needed
    mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`);

    callback();
}
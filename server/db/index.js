import keys from '../keys/db';

import mongoose from 'mongoose';

export default function(callback) {
    // connect to a database if needed
    mongoose.connect(`mongodb://${keys.username}:${keys.password}@${keys.url}`);

    callback();
}
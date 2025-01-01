import mongoose from 'mongoose';
// import MONGO_URI from ''

import dotenv from 'dotenv';
dotenv.config();

function connect() {
    const uri = process.env.MONGO_URI;
    // console.log(process.env.MONGO_URI);
    if (!uri) {
        console.error('Error: MONGO_URI is not defined');
        process.exit(1);
    }

    console.log(`Connecting to MongoDB with URI: ${uri}`); // Debugging log

    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(err => {
            console.error('Error connecting to MongoDB:', err);
        });
}

export default connect;

const mongoose = require('mongoose');

const dbConnector = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnector;
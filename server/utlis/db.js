const mongoose = require("mongoose");
//const URI= "mongodb://127.0.0.1:27017/mern"

const URI= process.env.MONGODB_URI;
//mongoose.connect(URI);
console.log(URI);

const connectDb= async()=> {
    try {
        await mongoose.connect(URI);
        console.log('connection succesfull to database');

    } catch (error) {
        console.log(`Error connecting to the database ${error.message}`);
        process.exit(0);
    }
}
module.exports=connectDb;

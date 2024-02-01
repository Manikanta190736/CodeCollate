const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require('./router/auth-router');
const contactRoute = require("./router/contact-router");
const connectDb = require("./utlis/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,  // Use 'credentials' instead of 'Credentials'
};

app.use(cors(corsOptions));

// Remove the redundant cors middleware here
// app.use(cors);

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

const PORT = 4002;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
});

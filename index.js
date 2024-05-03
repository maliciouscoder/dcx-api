require("dotenv").config();

const express = require('express');
const cors = require("cors");

const connectDB = require("./config/db");
const opportunityRoutes = require("./routes/apiRoutes");
const errorHandler = require("./middlewares/error");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/opportunities", opportunityRoutes);

app.use("/", (req, res) => {
    return res.json({
        message: "Welcome! The server is Live!"
    });
});

app.use(errorHandler);

const startServer = () => {
    try{
        connectDB();

        app.listen(port, () => console.log(`Server started listening on ${port}`));

    } catch(error){
        console.log(error);
    }
};

startServer();
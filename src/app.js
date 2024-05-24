import express from "express";
import router from "./routes/index.js";
import { connectMongoDB } from "./config/mongoDb.config.js";

// Conection to Mongo DB
connectMongoDB();

// Create an Express Application
const app = express();

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Main route
app.use("/api", router);

// Listen server
app.listen(8080, () => {
  console.log("Listening server on port 8080.")
});
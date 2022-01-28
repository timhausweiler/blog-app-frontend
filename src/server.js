import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { initMongoServer } from "./db/connection.js";
import user from "./routes/user.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from 'cors'
// import logger from "morgan";

initMongoServer();
const app = express();
const PORT = process.env.PORT || 3001;
const db = mongoose.connection;

// ============
// Middleware
// ============
app.use(express.json());
app.use(cors())
app.use("/api", user);
app.use(cookieParser());
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: false }));
// app.use(logger);

// Server Connection Error and Success
db.on("error", error => console.log(error.message));
db.on("connected", () => console.log(`Mongo is connected`));
db.on("disconnected", () => console.log(`Mongo is disconnected`));

app.listen(PORT, () => {
	console.log(`Listening on Port ${PORT}`);
});

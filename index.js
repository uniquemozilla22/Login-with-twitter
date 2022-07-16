
import express from "express";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import env from "dotenv";
import databaseConnection from "./Database/Connection.database.js";

env.config();
const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.json());

databaseConnection(mongoose)

routes(app);

const port = process.env.NODE_ENV !== "DEVELOPMENT" ? process.env.PORT : 8000;

server.listen(port, () => console.log("Server is running", port));

import express from "express";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import env from "dotenv";
import databaseConnection from "./Database/Connection.database.js";
import passport from 'passport'
import {Strategy} from 'passport-twitter'
import twitterLogin from "./services/twitterLogin.services.js";
import session from 'express-session'

env.config();
const app = express();
const server = http.createServer(app);
app.use(cors());

app.use(express.json());
app.use(session({    secret: 'secret',
resave: true,
saveUninitialized: true,

cookie: {
    secure: false,
    sameSite: 'Lax'
}}))
  app.use(passport.initialize())
  app.use(passport.session())
twitterLogin(passport, Strategy)


// Database connection with mongo DB
databaseConnection(mongoose)


// Routes function
routes(app,passport);

const port = process.env.NODE_ENV !== "DEVELOPMENT" ? process.env.PORT : 8000;

server.listen(port, () => console.log("Server is running", port));
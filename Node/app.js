import express from "express";
// var express = require('express'); 
import { mongoconnection } from "./db";
import bodyParser from "body-parser";


const app = express();
mongoconnection();
import cors from "cors";
import user from "./routes/user";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origin:"*"}))

app.use("/user",user)

export default app;
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import myRouter from "./routes/auth.js";

import { readdirSync } from "fs";
import morgan from "morgan";

//const express=require("express");
// const mongoose=require("mongoose");
//const cors=require("cors");
//const morgan  =require("morgan");
//require("dotenv").config();

const app = express();
const routes = readdirSync("./routes");

mongoose
  .connect('mongodb+srv://ashiqakkarayil:12101994%40AShiq@socialnetwork.jrcxbce.mongodb.net/', {})
  // .connect('mongodb+srv://ashiqakkarayil:rfa1434c1LBmcv8u@cluster0.yigdxtf.mongodb.net/', {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

//autoload  routers

// app.use('/api', myRouter);

routes.map(async (route) => {
  const { default: routeModule } = await import(`./routes/${route}`);
  app.use("/api", routeModule);
});


// readdirSync("./routes").map((r)=>app.use("/api", require(`./routes/${r}`)));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`sever port ${port}`));

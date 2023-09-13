import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.ts";
import path from "path";

//For env File
// dotenv.config();
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

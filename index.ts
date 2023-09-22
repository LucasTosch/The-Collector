import express, { Application } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDB } from "./config/db";

// Route files
import { usersRouter }  from "./routes/usersRoutes"

//For env File
dotenv.config();
// dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Create the express app
const app: Application = express();

// Parse requests of content-type - application/json
app.use(bodyParser.json());
const port = process.env.PORT || 8000;

app.use("/api/v1/users", usersRouter)

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

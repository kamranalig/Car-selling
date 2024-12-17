import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import carRoute from "./routes/carRoutes.js";
import authRoute from "./routes/authRoutes.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/public/uploads", express.static("public/uploads"));
connectDB();

app.use("/api/auth", authRoute);
app.use("/api/car", carRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

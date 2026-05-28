import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRoutes } from "./http/routes/UserRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.ALLOWED_CORS,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());

app.use("/users", userRoutes);

export default app;

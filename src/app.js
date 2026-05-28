import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRoutes } from "./http/routes/UserRoutes.js";
import { characterRoutes } from "./http/routes/CharacterRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({ ok: "true" });
});

app.use("/users", userRoutes);
app.use("/characters", characterRoutes);

export default app;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRoutes } from "./http/routes/UserRoutes.js";
import { characterRoutes } from "./http/routes/CharacterRoutes.js";
import { rankingRoutes } from "./http/routes/RankingRoutes.js";
import { rankingItemRoutes } from "./http/routes/RankingItemRoutes.js";

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
app.use("/rankings", rankingRoutes);
app.use("/ranking-itens", rankingItemRoutes);

export default app;

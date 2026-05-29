import express from "express";
import { RankingItemController } from "../../http/controllers/RankingItemController.js";

const rankingItemController = new RankingItemController();
const router = express.Router();

// ranking itens routes
router.post("/", (req, res) => rankingItemController.create(req, res));
router.get("/:id", (req, res) => rankingItemController.findById(req, res));
router.get("/ranking/:id", (req, res) =>
  rankingItemController.findByRankingId(req, res),
);
router.get("/", (req, res) => rankingItemController.findAll(req, res));
router.delete("/:id", (req, res) => rankingItemController.delete(req, res));

export { router as rankingItemRoutes };

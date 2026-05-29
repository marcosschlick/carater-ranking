import express from "express";
import { RankingController } from "../../http/controllers/RankingController.js";

const rankingController = new RankingController();
const router = express.Router();

// rankings routes
router.post("/", (req, res) => rankingController.create(req, res));
router.get("/:id", (req, res) => rankingController.findById(req, res));
router.get("/", (req, res) => rankingController.findAll(req, res));
router.patch("/:id", (req, res) => rankingController.update(req, res));
router.delete("/:id", (req, res) => rankingController.delete(req, res));

export { router as rankingRoutes };

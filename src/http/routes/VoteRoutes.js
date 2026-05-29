import express from "express";
import { VoteController } from "../../http/controllers/VoteController.js";

const voteController = new VoteController();
const router = express.Router();

// votes routes
router.post("/", (req, res) => voteController.create(req, res));
router.get("/:id", (req, res) => voteController.findById(req, res));
router.get("/", (req, res) => voteController.findAll(req, res));
router.patch("/:id", (req, res) => voteController.update(req, res));
router.delete("/:id", (req, res) => voteController.delete(req, res));

export { router as votesRoutes };

import express from "express";
import { CharacterController } from "../../http/controllers/CharacterController.js";

const characterController = new CharacterController();
const router = express.Router();

// characters routes
router.post("/", (req, res) => characterController.create(req, res));
router.get("/:id", (req, res) => characterController.findById(req, res));
router.get("/", (req, res) => characterController.findAll(req, res));
router.patch("/:id", (req, res) => characterController.update(req, res));
router.delete("/:id", (req, res) => characterController.delete(req, res));

export { router as characterRoutes };

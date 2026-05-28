import express from "express";
import { UserController } from "../../http/controllers/UserController.js";

const userController = new UserController();
const router = express.Router();

// users routes
router.post("/", (req, res) => userController.create(req, res));
router.get("/:id", (req, res) => userController.findById(req, res));
router.get("/", (req, res) => userController.findAll(req, res));
router.patch("/:id", (req, res) => userController.update(req, res));
router.delete("/:id", (req, res) => userController.delete(req, res));

export { router as userRoutes };

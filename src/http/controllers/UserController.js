import { UserService } from "../../application/services/UserService.js";
import {
  CreateUserDTO,
  UpdateUserDTO,
} from "../../application/dtos/UserDTO.js";

export class UserController {
  constructor() {
    this.service = new UserService();
  }

  async create(req, res) {
    try {
      const dto = new CreateUserDTO(req.body);
      const user = await this.service.create(dto);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const user = await this.service.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const users = await this.service.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const dto = new UpdateUserDTO(req.body);
      const updated = await this.service.update(req.params.id, dto);
      if (!updated) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json(updated);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const deleted = await this.service.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

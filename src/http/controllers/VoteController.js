import { VoteService } from "../../application/services/VoteService.js";
import {
  CreateVoteDTO,
  UpdateVoteDTO,
} from "../../application/dtos/VoteDTO.js";

export class VoteController {
  constructor() {
    this.service = new VoteService();
  }

  async create(req, res) {
    try {
      const dto = new CreateVoteDTO(req.body);
      const vote = await this.service.create(dto);
      return res.status(201).json(vote);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const vote = await this.service.findById(req.params.id);
      if (!vote) {
        return res.status(404).json({ error: "Vote not found" });
      }
      return res.status(200).json(vote);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const votes = await this.service.findAll();
      return res.status(200).json(votes);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const dto = new UpdateVoteDTO(req.body);
      const updated = await this.service.update(req.params.id, dto);
      if (!updated) {
        return res.status(404).json({ error: "Vote not found" });
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
        return res.status(404).json({ error: "Vote not found" });
      }
      return res.status(200).json({ message: "Vote deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

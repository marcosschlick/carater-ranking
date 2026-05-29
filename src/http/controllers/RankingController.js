import { RankingService } from "../../application/services/RankingService.js";
import {
  CreateRankingDTO,
  UpdateRankingDTO,
} from "../../application/dtos/RankingDTO.js";

export class RankingController {
  constructor() {
    this.service = new RankingService();
  }

  async create(req, res) {
    try {
      const dto = new CreateRankingDTO(req.body);
      const ranking = await this.service.create(dto);
      return res.status(201).json(ranking);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const ranking = await this.service.findById(req.params.id);
      if (!ranking) {
        return res.status(404).json({ error: "Ranking not found" });
      }
      return res.status(200).json(ranking);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const rankings = await this.service.findAll();
      return res.status(200).json(rankings);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const dto = new UpdateRankingDTO(req.body);
      const updated = await this.service.update(req.params.id, dto);
      if (!updated) {
        return res.status(404).json({ error: "Ranking not found" });
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
        return res.status(404).json({ error: "Ranking not found" });
      }
      return res.status(200).json({ message: "Ranking deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

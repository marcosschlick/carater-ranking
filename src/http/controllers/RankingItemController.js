import { RankingItemService } from "../../application/services/RankingItemService.js";
import { CreateRankingItemDTO } from "../../application/dtos/RankingItemDTO.js";

export class RankingItemController {
  constructor() {
    this.service = new RankingItemService();
  }

  async create(req, res) {
    try {
      const dto = new CreateRankingItemDTO(req.body);
      const rankingItem = await this.service.create(dto);
      return res.status(201).json(rankingItem);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const rankingItem = await this.service.findById(req.params.id);
      if (!rankingItem) {
        return res.status(404).json({ error: "Ranking item not found" });
      }
      return res.status(200).json(rankingItem);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async findByRankingId(req, res) {
    try {
      const rankingItens = await this.service.findByRankingId(
        req.params.ranking_id,
      );
      return res.status(200).json(rankingItens);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const rankingItens = await this.service.findAll();
      return res.status(200).json(rankingItens);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const deleted = await this.service.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Ranking item not found" });
      }
      return res
        .status(200)
        .json({ message: "Ranking item deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

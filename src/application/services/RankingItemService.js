import { RankingItemRepository } from "../../domain/repositories/RankingItemRepository.js";

export class RankingItemService {
  constructor() {
    this.repository = new RankingItemRepository();
  }

  async create(rankingItemData) {
    return this.repository.create(rankingItemData);
  }

  async findById(id) {
    return this.repository.findById(id);
  }

  async findByRankingId(rankingId) {
    return this.repository.findByRankingId(rankingId);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async delete(id) {
    return this.repository.delete(id);
  }
}

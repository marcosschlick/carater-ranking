import { RankingRepository } from "../../domain/repositories/RankingRepository.js";

export class RankingService {
  constructor() {
    this.repository = new RankingRepository();
  }

  async create(rankingData) {
    return this.repository.create(rankingData);
  }

  async findById(id) {
    return this.repository.findById(id);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async update(id, rankingData) {
    return this.repository.update(id, rankingData);
  }

  async delete(id) {
    return this.repository.delete(id);
  }
}

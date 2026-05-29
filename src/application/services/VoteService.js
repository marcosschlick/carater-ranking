import { VoteRepository } from "../../domain/repositories/VoteRepository.js";

export class VoteService {
  constructor() {
    this.repository = new VoteRepository();
  }

  async create(voteData) {
    return this.repository.create(voteData);
  }

  async findById(id) {
    return this.repository.findById(id);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async update(id, voteData) {
    return this.repository.update(id, voteData);
  }

  async delete(id) {
    return this.repository.delete(id);
  }
}

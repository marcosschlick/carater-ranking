import { UserRepository } from "../../domain/repositories/UserRepository.js";

export class UserService {
  constructor() {
    this.repository = new UserRepository();
  }

  async create(userData) {
    return this.repository.create(userData);
  }

  async findById(id) {
    return this.repository.findById(id);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async update(id, userData) {
    return this.repository.update(id, userData);
  }

  async delete(id) {
    return this.repository.delete(id);
  }
}

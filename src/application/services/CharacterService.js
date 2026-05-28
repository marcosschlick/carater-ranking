import { CharacterRepository } from "../../domain/repositories/CharacterRepository.js";

export class CharacterService {
  constructor() {
    this.repository = new CharacterRepository();
  }

  async create(characterData) {
    return this.repository.create(characterData);
  }

  async findById(id) {
    return this.repository.findById(id);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async update(id, characterData) {
    return this.repository.update(id, characterData);
  }

  async delete(id) {
    return this.repository.delete(id);
  }
}

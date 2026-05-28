import { CharacterService } from "../../application/services/CharacterService.js";
import {
  CreateCharacterDTO,
  UpdateCharacterDTO,
} from "../../application/dtos/CharacterDTO.js";

export class CharacterController {
  constructor() {
    this.service = new CharacterService();
  }

  async create(req, res) {
    try {
      const dto = new CreateCharacterDTO(req.body);
      const character = await this.service.create(dto);
      return res.status(201).json(character);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const character = await this.service.findById(req.params.id);
      if (!character) {
        return res.status(404).json({ error: "Character not found" });
      }
      return res.status(200).json(character);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const characters = await this.service.findAll();
      return res.status(200).json(characters);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const dto = new UpdateCharacterDTO(req.body);
      const updated = await this.service.update(req.params.id, dto);
      if (!updated) {
        return res.status(404).json({ error: "Character not found" });
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
        return res.status(404).json({ error: "Character not found" });
      }
      return res
        .status(200)
        .json({ message: "Character deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

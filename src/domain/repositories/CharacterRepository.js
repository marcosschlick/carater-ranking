import pool from "../../database/database.js";
import { Character } from "../models/Character.js";

export class CharacterRepository {
  async create(characterData) {
    const { name, photo_url } = characterData;
    const query = `
      INSERT INTO characters (name,  photo_url)
      VALUES ($1, $2)
      RETURNING *
    `;
    const { rows } = await pool.query(query, [name, photo_url]);
    return new Character(rows[0]);
  }

  async findById(id) {
    const query = "SELECT * FROM characters WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows.length > 0 ? new Character(rows[0]) : null;
  }

  async findAll() {
    const query = "SELECT * FROM characters";
    const { rows } = await pool.query(query);
    return rows.map((row) => new Character(row));
  }

  async update(id, characterData) {
    const { name, photo_url } = characterData;
    const query = `
      UPDATE characters
      SET name = $1, photo_url = $2
      WHERE id = $3
      RETURNING *
    `;
    const { rows } = await pool.query(query, [name, photo_url, id]);
    return rows.length > 0 ? new Character(rows[0]) : null;
  }

  async delete(id) {
    const query = "DELETE FROM characters WHERE id = $1 RETURNING *";
    const { rows } = await pool.query(query, [id]);
    return rows.length > 0 ? new Character(rows[0]) : null;
  }
}

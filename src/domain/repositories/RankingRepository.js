import pool from "../../database/database.js";
import { Ranking } from "../models/Ranking.js";

export class RankingRepository {
  async create(rankingData) {
    const { name, user_id, created_at } = rankingData;
    const query = `
      INSERT INTO rankings (name,  user_id, created_at)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const { rows } = await pool.query(query, [name, user_id, created_at]);
    return new Ranking(rows[0]);
  }

  async findById(id) {
    const query = "SELECT * FROM rankings WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows.length > 0 ? new Ranking(rows[0]) : null;
  }

  async findAll() {
    const query = "SELECT * FROM rankings";
    const { rows } = await pool.query(query);
    return rows.map((row) => new Ranking(row));
  }

  async update(id, rankingData) {
    const { name } = rankingData;
    const query = `
      UPDATE rankings
      SET name = $1
      WHERE id = $2
      RETURNING *
    `;
    const { rows } = await pool.query(query, [name, id]);
    return rows.length > 0 ? new Ranking(rows[0]) : null;
  }

  async delete(id) {
    const query = "DELETE FROM rankings WHERE id = $1 RETURNING *";
    const { rows } = await pool.query(query, [id]);
    return rows.length > 0 ? new Ranking(rows[0]) : null;
  }
}

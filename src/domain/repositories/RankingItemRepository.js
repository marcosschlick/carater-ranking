import pool from "../../database/database.js";
import { RankingItem } from "../models/RankingItem.js";

export class RankingItemRepository {
  async create(rankingItemData) {
    const { name, photo_url } = rankingItemData;
    const query = `
      INSERT INTO ranking_itens (name,  photo_url)
      VALUES ($1, $2)
      RETURNING *
    `;
    const { rows } = await pool.query(query, [name, photo_url]);
    return new RankingItem(rows[0]);
  }

  async findById(id) {
    const query = "SELECT * FROM ranking_itens WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows.length > 0 ? new RankingItem(rows[0]) : null;
  }

  async findByRankingId(rankingId) {
    const query = "SELECT * FROM ranking_itens WHERE ranking_id = $1";
    const { rows } = await pool.query(query, [rankingId]);
    return rows.length > 0 ? new RankingItem(rows[0]) : null;
  }

  async findAll() {
    const query = "SELECT * FROM ranking_itens";
    const { rows } = await pool.query(query);
    return rows.map((row) => new RankingItem(row));
  }

  async delete(id) {
    const query = "DELETE FROM ranking_itens WHERE id = $1 RETURNING *";
    const { rows } = await pool.query(query, [id]);
    return rows.length > 0 ? new RankingItem(rows[0]) : null;
  }
}

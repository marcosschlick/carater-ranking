import pool from "../../database/database.js";
import { Vote } from "../models/Vote.js";

export class VoteRepository {
  async create(voteData) {
    const { ranking_id, user_id, character_id, tier } = voteData;
    const query = `
      INSERT INTO votes (ranking_id, user_id, character_id, tier)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const { rows } = await pool.query(query, [
      ranking_id,
      user_id,
      character_id,
      tier,
    ]);
    return new Vote(rows[0]);
  }

  async findById(id) {
    const query = "SELECT * FROM votes WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows.length > 0 ? new Vote(rows[0]) : null;
  }

  async findAll() {
    const query = "SELECT * FROM votes";
    const { rows } = await pool.query(query);
    return rows.map((row) => new Vote(row));
  }

  async update(id, voteData) {
    const { tier } = voteData;
    const query = `
      UPDATE votes
      SET tier = $1
      WHERE id = $2
      RETURNING *
    `;
    const { rows } = await pool.query(query, [name, id]);
    return rows.length > 0 ? new Vote(rows[0]) : null;
  }

  async delete(id) {
    const query = "DELETE FROM votes WHERE id = $1 RETURNING *";
    const { rows } = await pool.query(query, [id]);
    return rows.length > 0 ? new Vote(rows[0]) : null;
  }
}

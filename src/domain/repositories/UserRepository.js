import pool from "../../database/database.js";
import { User } from "../models/User.js";

export class UserRepository {
  async create(userData) {
    const { name, username, password_hash, photo_url } = userData;
    const query = `
      INSERT INTO users (name, username, password_hash, photo_url)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const { rows } = await pool.query(query, [
      name,
      username,
      password_hash,
      photo_url,
    ]);
    return new User(rows[0]);
  }

  async findById(id) {
    const query = "SELECT * FROM users WHERE id = $1";
    const { rows } = await pool.query(query, [id]);
    return rows.length > 0 ? new User(rows[0]) : null;
  }

  async findAll() {
    const query = "SELECT * FROM users";
    const { rows } = await pool.query(query);
    return rows.map((row) => new User(row));
  }

  async update(id, userData) {
    const { name, password_hash, photo_url } = userData;
    const query = `
      UPDATE users
      SET name = $1, password_hash = $2, photo_url = $3
      WHERE id = $4
      RETURNING *
    `;
    const { rows } = await pool.query(query, [
      name,
      password_hash,
      photo_url,
      id,
    ]);
    return rows.length > 0 ? new User(rows[0]) : null;
  }

  async delete(id) {
    const query = "DELETE FROM users WHERE id = $1 RETURNING *";
    const { rows } = await pool.query(query, [id]);
    return rows.length > 0 ? new User(rows[0]) : null;
  }
}

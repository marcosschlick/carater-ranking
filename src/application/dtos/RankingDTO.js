export class CreateRankingDTO {
  constructor({ name, user_id, created_at }) {
    this.name = name;
    this.user_id = user_id;
    this.created_at = created_at;
  }
}

export class UpdateRankingDTO {
  constructor({ name, user_id, created_at }) {
    this.name = name;
  }
}

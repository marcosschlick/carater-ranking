export class CreateVoteDTO {
  constructor({ ranking_id, user_id, character_id, tier }) {
    this.ranking_id = ranking_id;
    this.user_id = user_id;
    this.character_id = character_id;
    this.tier = tier;
  }
}

export class UpdateVoteDTO {
  constructor({ tier }) {
    this.tier = tier;
  }
}

export class Vote {
  constructor({ id, ranking_id, user_id, character_id, tier }) {
    this.id = id;
    this.ranking_id = ranking_id;
    this.user_id = user_id;
    this.character_id = character_id;
    this.tier = tier;
  }
}

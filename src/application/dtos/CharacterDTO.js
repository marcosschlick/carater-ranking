export class CreateCharacterDTO {
  constructor({ name, photo_url }) {
    this.name = name;
    this.photo_url = photo_url;
  }
}

export class UpdateCharacterDTO {
  constructor({ name, photo_url }) {
    this.name = name;
    this.photo_url = photo_url;
  }
}

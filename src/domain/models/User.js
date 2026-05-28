export class User {
  constructor({ id, name, username, password_hash, photo_url }) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.password_hash = password_hash;
    this.photo_url = photo_url;
  }
}

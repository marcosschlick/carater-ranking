export class User {
  constructor({ id, name, email, password_hash, photo_url }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password_hash = password_hash;
    this.photo_url = photo_url;
  }
}

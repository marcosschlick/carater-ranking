export class CreateUserDTO {
  constructor({ name, username, password, photo_url }) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.photo_url = photo_url;
  }
}

export class UpdateUserDTO {
  constructor({ name, password, photo_url }) {
    this.name = name;
    this.password = password;
    this.photo_url = photo_url;
  }
}

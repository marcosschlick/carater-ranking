export class CreateUserDTO {
  constructor({ name, email, password, photo_url }) {
    this.name = name;
    this.email = email;
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

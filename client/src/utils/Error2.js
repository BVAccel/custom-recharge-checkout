export default class Error2 {
  constructor({ message, path, status = 400, value }) {
    this.message = message;
    this.path = path;
    this.status = status;
    this.value = value;
  }
}

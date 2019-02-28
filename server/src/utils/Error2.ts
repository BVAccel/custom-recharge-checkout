interface Error2 {
  message: string;
  path?: string;
  status?: number;
  value?: any;
}

class Error2 implements Error2 {
  constructor({ message, path, status = 500, value }: Error2) {
    this.message = message;
    this.path = path;
    this.status = status;
    this.value = value;
  }
}

export default Error2;

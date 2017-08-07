export class Website {
  private _id: number;
  private _name: string;
  private _url: string;

  constructor(name: string, url: string, id: number) {
    this._name = name;
    this._url = url;
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  set url(value: string) {
    this._url = value;
  }

  get url(): string {
    return this._url;
  }

  set name(value: string) {
    this._name = value;
  }

  get name(): string {
    return this._name;
  }
}

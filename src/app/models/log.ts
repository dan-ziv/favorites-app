import {Website} from './website';

export class Log {

  static Actions = {
    ADDED: 'Website was added',
    EDITED: 'Website was edited',
    REMOVED: 'Website was removed'
  };

  private _time: Date;
  private _action: string;
  private _website: Website;

  constructor(action: string, website: Website) {
    this._time = new Date();
    this._action = action;
    this._website = website;
  }

  get website(): Website {
    return this._website;
  }

  get action(): string {
    return this._action;
  }

  get time(): Date {
    return this._time;
  }
}

import {Website} from '../models/website';
import {Log} from '../models/log';

export class WebsiteService {
  private _websites: Website[];
  private _index: number;
  private _logs: Log[];

  constructor() {
    this._logs = [];
    this._websites = [];
    this._index = 0;
    // Add initial sites for demo
    this.addWebsite({name: 'Facebook', url: 'www.facebook.com'});
    this.addWebsite({name: 'Microsoft', url: 'www.microsoft.co.il'});
    this.addWebsite({name: 'Google', url: 'www.google.com'});
  }

  public getWebsites(): Website[] {
    return this._websites;
  }

  public getLogs(): Log[] {
    return this._logs;
  }

  public deleteWebsite(event: any): void {
    const id = event.id;
    const website = this._websites.find((w) => w.id === id);
    this._websites = this._websites.filter((w) => w.id !== id);
    this._logs.push(new Log(Log.Actions.REMOVED, website));
  }

  public addWebsite(event: any): void {
    const name = event.name;
    const url = event.url;
    if (name && url) {
      const website = new Website(name, url, this._index++);
      this._websites = [...this._websites, website];
      this._logs.push(new Log(Log.Actions.ADDED, website));
    }
  }

  public editWebsite(event: any): void {
    const id = event.id;
    const website = this._websites.find((w) => w.id === id);
    if (website) {
      website.name = event.name;
      website.url = event.url;
      this._logs.push(new Log(Log.Actions.EDITED, website));
    }
  }

  public reset() {
    this._websites = this._websites.slice();
  }
}


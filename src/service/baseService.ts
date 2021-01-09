import { Service } from 'vandoras';

export default class baseService extends Service {
  public urlPrefix = "http://115.29.150.92:8080";

  public async dictQuery(params: any) {
    return await this.http.get(`${this.urlPrefix}/dict/query`, { params });
  }
}
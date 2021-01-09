
import baseService from './baseService';

class PatientInfoService extends baseService {
  public async getPatientByTel(params: any) {
    return await this.http.get(`${this.urlPrefix}/app/patient/query/byphone`, { params });
  }
  public async savePatient(params: any) {
    return await this.http.post(`${this.urlPrefix}/h5/create/patient`, params);
  }
}
export default new PatientInfoService();
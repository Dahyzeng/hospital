import { RequestImpl } from "@/impls/request.impl";
import { ResponseImpl } from "@/impls/response.impl";
import { Service } from "vandoras";

export interface TestRequest extends RequestImpl {}

export interface TestResponesData {
  username: string;
}

export class TestRespones extends ResponseImpl {
  public data: TestResponesData[];
  constructor() {
    super();
    this.data = [];
  }
}

export class MedicineService extends Service {
  public async test() {
    return await this.http.get("/test", {});
  }
}

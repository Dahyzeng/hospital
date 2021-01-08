import { Action, Module, Mutation, VuexModule } from "vandoras";
import store from "@/store";
import { MedicineService, TestRespones } from "./service";

export interface InfoUnit {
  drugName: string;
  specification: string;
  useMethod: string;
  useTime: string;
  period: string;
}

export interface IPlanState {
  plan: {
    diseaseStaging: string;
    infoList: InfoUnit[];
  };
}

@Module({ store })
export class PlanStore extends VuexModule implements IPlanState {
  public service: MedicineService;
  public plan: { diseaseStaging: string; infoList: InfoUnit[] };

  constructor(module: PlanStore) {
    super(module);
    this.service = new MedicineService();
    this.plan = {
      diseaseStaging: "",
      infoList: [],
    };
  }

  @Action({ commit: "testSuccess" })
  public async test() {
    return this.service.test();
  }
  @Action({ commit: "addInfo" })
  public addInfo() {
    this.setInfoList([
      ...this.plan.infoList,
      {
        drugName: "",
        specification: "",
        useMethod: "",
        useTime: "",
        period: "",
      },
    ]);
  }
  @Mutation
  public setInfoList(list: InfoUnit[]) {
    this.plan.infoList = list;
  }
}

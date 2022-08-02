import ReferenceDataService from "../components/core/ReferenceDataService";
import DataService from "../components/core/DataService";
import IUser from "./User";

export default interface IGlobalContext {
  dataService: DataService;
  referenceData: ReferenceDataService;
  user: IUser;
  setUser: any;
}

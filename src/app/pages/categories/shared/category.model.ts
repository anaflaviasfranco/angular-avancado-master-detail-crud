import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Category extends BaseResourceModel {
  static id: any;
    constructor (
        public id?: number,
        public name?: string,
        public description?: string
    ){
      super();
    }
}
import { IFormula } from './app.interface';
import { IParameters } from './app.interface';
export declare class AppService {
    getFormula(): IFormula;
    addObj(object: any): any;
    getParameterByID(objId: number): IParameters;
    deleteObjId(Id: number): string;
    putParameterByID(object: IParameters): string;
    getParametersByQuery(min: string, max: string): IParameters[];
    private paramObjIndex;
    getHello(): string;
}

import { IQueryParams, IFormula } from './app.interface';
import { IParameters } from './app.interface';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getFormula(): IFormula;
    getParameterByID(objectId: number): IParameters;
    addObj(objectContent: object): any;
    deleteObjId(objectId: number): string;
    putParameterByID(objectContent: IParameters): string;
    getParametersByQuery(params: IQueryParams): IParameters[];
}

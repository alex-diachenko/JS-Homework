import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getFormula(): string;
    addObj(objectContent: object): any;
    deleteObj(objectId: number): string;
}

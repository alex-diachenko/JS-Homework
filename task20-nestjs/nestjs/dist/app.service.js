"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const formula = {
    "parameters": [
        {
            "id": 703,
            "validation": {
                "min": 0,
                "max": 100,
                "required": null,
                "readonly": null,
                "params": null
            },
            "default": "10",
            "name": "WF",
            "label": "Waste Factor"
        },
        {
            "id": 702,
            "validation": {
                "min": 0,
                "max": 60,
                "required": null,
                "readonly": null,
                "params": null
            },
            "default": "10",
            "name": "FILL",
            "label": "Cable/Pipe FILL/occupancy FILL"
        },
        {
            "id": 701,
            "validation": {
                "min": null,
                "max": null,
                "required": null,
                "readonly": true,
                "params": null
            },
            "default": "150",
            "name": "T",
            "label": "Seal Thickness"
        },
        {
            "id": 700,
            "validation": {
                "min": null,
                "max": 400,
                "required": null,
                "readonly": null,
                "params": null
            },
            "default": "200",
            "name": "W",
            "label": "Opening Width"
        },
        {
            "id": 698,
            "validation": {
                "min": null,
                "max": 400,
                "required": null,
                "readonly": null,
                "params": null
            },
            "default": "200",
            "name": "H",
            "label": "Opening Height"
        },
        {
            "id": 696,
            "validation": {
                "min": null,
                "max": null,
                "required": null,
                "readonly": null,
                "params": null
            },
            "default": "1",
            "name": "OP",
            "label": "No of Openings"
        }
    ],
    "id": 162,
    "uuid": "a31ebb13-43db-4ed6-ba47-d026fb899c8f",
    "createdAt": "15:30:18.896638+00",
    "updatedAt": "15:30:18.896638+00",
    "name": "rectangular",
    "formula": "round(OP * (H * W * T) / 1000 / 1000 * (100 - FILL) / 100 / 2.1 * (100 + WF) / 100, 1)",
};
let AppService = class AppService {
    getFormula() {
        return formula;
    }
    addObj(object) {
        formula.parameters.push(object);
        console.log(`added object with id : ${object.id}`);
        return formula;
    }
    getParameterByID(objId) {
        const index = this.paramObjIndex(objId);
        return formula.parameters[index];
    }
    deleteObjId(Id) {
        const index = this.paramObjIndex(Id);
        formula.parameters.splice(index, 1);
        return `removed object with this id: ${Id}`;
    }
    putParameterByID(object) {
        let index = this.paramObjIndex(object.id);
        formula.parameters.splice(index, 1);
        formula.parameters.push(object);
        return `replaced object with this id via PUT: ${object.id}`;
    }
    getParametersByQuery(min, max) {
        return formula.parameters.filter(parameter => {
            if (parameter.id >= +min && parameter.id <= +max)
                return parameter;
        });
    }
    paramObjIndex(id) {
        const objectIndex = formula.parameters.findIndex((obj) => obj.id == id);
        if (objectIndex === -1) {
            throw new common_1.NotFoundException('Could not find this id');
        }
        return objectIndex;
    }
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map
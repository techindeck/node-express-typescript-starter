import { Router } from "express";

export class V1ApiRoutes {
    router:Router = Router();

    constructor() {
        this.init();
    }
    
    private init() {
        console.log("V1ApiRoutes initialized");
    }

}
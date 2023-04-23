import { Router } from "express";
import { TagGateway } from "../../../../../app/Domains/Tag/Http/Gateway";

export class V1ApiRoutes {
    router:Router = Router();

    constructor() {
        this.init();
    }
    
    private init() {
         this.router.use("/tags", new TagGateway(Router()).router);
    }

}
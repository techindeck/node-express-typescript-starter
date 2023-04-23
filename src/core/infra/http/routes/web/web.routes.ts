import { Router } from 'express';
// import { Logging } from './../../../../providers/library/Logging';

export class WebRoutes {
    router: Router = Router();

    constructor() {
        this.init();
    }

    private init() {
        this.router.get('/', (req, res) => {
            res.send('Hello World');
        });
    }
}

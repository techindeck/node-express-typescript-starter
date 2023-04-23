/* eslint-disable @typescript-eslint/no-explicit-any */

import { Application } from 'express';
import { logger } from '../../providers/library/console.logger';

export class App {
    private app: Application;

    constructor(
        private appInit: {
            express: Application;
            port: number;
            host: string;
            middleWares: object[];
            routes: any[];
            connections: any[];
        }
    ) {
        this.app = appInit.express;
        this.middleware(appInit.middleWares);
        this.routes();
        // this.connections();
    }

    private middleware(middleWares: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        forEach: (arg0: (middleWare: any) => void) => void;
    }) {
        middleWares.forEach((middleWare) => {
            this.app.use(middleWare);
        });
    }

    private routes() {
        this.appInit.routes.forEach((route) => {
            this.app.use('/api/v1/', route.router);
        });
    }

    private connections() {
        this.appInit.connections.forEach((connection) => {
            connection.connect();
        });
    }

    public listen() {
        this.app.listen(this.appInit.port, () => {
            logger.info(`App listening on the http://${this.appInit.host}:${this.appInit.port}`);
        });
    }
}

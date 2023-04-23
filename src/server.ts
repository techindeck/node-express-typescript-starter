import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';

config();

// Path: App Server

import { App } from './core/infra/http/app';
import { WebRoutes } from './core/infra/http/routes/web/web.routes';
import { V1ApiRoutes } from './core/infra/http/routes/api/v1.api';
import { DatabaseConnection } from './core/infra/database';
import { StreamLogger } from './core/providers/library/stream.logger';

const app = new App({
    express: express(),
    port: Number(process.env.PORT) || 3000,
    host: process.env.HOST || 'localhost',
    middleWares: [
        express.json(),
        express.urlencoded({ extended: false }),
        helmet(),
        cors(),
        morgan('combined', {
            stream: new StreamLogger().appStream,
            skip: (req, res) => res.statusCode >= 400 && res.statusCode < 600
        }),
        morgan('combined', {
            stream: new StreamLogger().errStream,
            skip: (req, res) => res.statusCode >= 200 && res.statusCode < 300
        }),
        express.static(path.join(__dirname, 'public'))
    ],
    routes: [new WebRoutes(), new V1ApiRoutes()],
    connections: [new DatabaseConnection()]
});

app.listen();

import { config } from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";

config();

// Path: App Server
import { App } from "./core/infra/http/app";
import { WebRoutes } from "./core/infra/http/routes/web/web.routes";
import { V1ApiRoutes } from "./core/infra/http/routes/api/v1.api";
import { DatabaseConnection } from "./core/infra/database";

const app = new App({
  express: express(),
  port: Number(process.env.PORT) || 3000,
  host: process.env.HOST || "localhost",
  middleWares: [
    express.json(),
    express.urlencoded({ extended: false }),
    helmet(),
    cors(),
    morgan("dev"),
    express.static(path.join(__dirname, "public")),
  ],
  routes: [new WebRoutes(), new V1ApiRoutes()],
  connections: [new DatabaseConnection()],
});

app.listen();

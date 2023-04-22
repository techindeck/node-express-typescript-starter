import { Router } from "express";

export class WebRoutes {
  router: Router = Router();

  constructor() {
    this.init();
  }

  private init() {
    console.log("WebRoutes initialized");

    this.router.get("/", (req, res) => { 
      res.send("Hello World")
    });
  }
}
import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const ValidationMiddleware = (schema: Joi.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(422).send(error.details[0].message);
    } else {
      next();
    }
  };
};

import models from '../models';
import { Request, Response, NextFunction } from 'express';

export const userContext = (req: Request, res: Response, next: NextFunction) => {
  req.context = {
    models,
  };

  next();
};

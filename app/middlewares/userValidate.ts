import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export const userSchema = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    id: Joi.string().required(),
    login: Joi.string().required(),
    password: Joi.string().alphanum().required(),
    age: Joi.number().min(4).max(130).integer().required(),
    isDeleted: Joi.boolean().required(),
  });

  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };

  const { error, value } = schema.validate(req.body, options);

  if (error) {
    const { details } = error;
    const message = details.map((i) => i.message).join(',');

    res.status(400).json({ error: message });
  } else {
    req.body = value;
    next();
  }
};

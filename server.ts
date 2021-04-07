import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import models from './app/models';
import routes from './app/routes';
import { Request, Response } from 'express';

const corsOptions = {
  origin: 'http://localhost:8081',
};

const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req: Request, res: Response, next) => {
  req.context = {
    models,
  };

  next();
});

app.use('/users', routes.user);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

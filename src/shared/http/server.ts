import 'reflect-metadata';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import 'reflect-metadata';
import '@shared/typeorm';
import { errors } from 'celebrate';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    console.log(`erro na rota ${request.path}`);
    console.error(`==> ${error}\n`);
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3210, () => {
  console.log('Backend da BeMall rodando na porta 3210 !');
});

import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UserController from '../controllers/UserController';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';

const usersRoutes = Router();
const usersController = new UserController();

usersRoutes.get('/', isAuthenticated, usersController.index);

usersRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      cep: Joi.string().required(),
      cidade: Joi.string().required(),
      uf: Joi.string().required(),
      logradouro: Joi.string().required(),
      numero: Joi.number().required(),
      bairro: Joi.string().required(),
      complemento: Joi.string(),
    },
  }),
  usersController.create,
);

export default usersRoutes;

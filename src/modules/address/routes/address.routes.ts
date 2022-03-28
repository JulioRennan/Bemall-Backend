import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import AddressController from '../controllers/AddressController';

const addressRoutes = Router();
const addressController = new AddressController();

addressRoutes.get(
  '/:cep',
  celebrate({
    [Segments.PARAMS]: {
      cep: Joi.string().required(),
    },
  }),
  addressController.show,
);

export default addressRoutes;

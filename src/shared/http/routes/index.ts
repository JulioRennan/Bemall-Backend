import userRoutes from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/session', sessionsRouter);
routes.get('/', (request, response) => {
  return response.json({ message: 'bemall backend rodando ' });
});

export default routes;

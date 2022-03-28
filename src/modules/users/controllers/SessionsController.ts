import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import CreateSessionService from '../services/CreateSessionsService';

export default class SessionsController {
  public async createSession(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { email, password } = request.body;
    const createSession = new CreateSessionService();
    const user = await createSession.exec({ email, password });
    return response.json(instanceToInstance(user));
  }
}

import AppError from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '@config/auth';
interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}
export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('Nao possui um token JWT enviado.');
  }
  const [_, token] = authHeader.split(' ');
  try {
    const decodedToken = verify(token, authConfig.jwt.secret) as TokenPayload;
    const { sub } = decodedToken;
    request.user = {
      id: sub,
    };
    return next();
  } catch {
    throw new AppError('Token JWT inválido');
  }
}

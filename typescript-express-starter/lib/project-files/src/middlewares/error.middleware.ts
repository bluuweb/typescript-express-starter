import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';

function errorMiddleware(error: HttpException, req: Request, res: Response) {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';

  console.log('[ERROR] ', status, message);

  res.status(status).json({ message });
}

export default errorMiddleware;

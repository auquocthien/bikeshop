import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('inside middleware')
    const { authorization } = req.headers
    if (!authorization) {
      throw new HttpException('no authorzation token', HttpStatus.FORBIDDEN)
    }
    if (authorization == 'aaaaaaaa') next();
    else {
      throw new HttpException('invalid authorzation token ', HttpStatus.NOT_ACCEPTABLE)
    }
  }
}

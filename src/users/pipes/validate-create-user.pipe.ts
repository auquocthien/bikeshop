import { ArgumentMetadata, Injectable, PipeTransform, HttpException, HttpStatus } from '@nestjs/common';
import { UserCreateDetail } from '../dtos/create-user-detail.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: UserCreateDetail, metadata: ArgumentMetadata) {
    console.log('inside pipe')
    console.log(value)

    return { ...value };
  }
}

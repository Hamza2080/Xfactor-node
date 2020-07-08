
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

class LoginDTO {
    constructor(private username: string, private password: string) {}
}

@Injectable()
export class LoginValidationPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  transform(value: any, metadata: ArgumentMetadata) {
    try {
        if (value.username && value.password)
        return new LoginDTO(value.username, value.password);
    } catch (error) {
        throw new BadRequestException('Validation failed, please provide username/password');
    }
  }
}
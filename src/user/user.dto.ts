
import { IsNotEmpty } from 'class-validator';

export class UserDTO {

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    country: string;

    @IsNotEmpty()
    contact: string;

    @IsNotEmpty()
    email: string;

}

export class UserRO {
    id: string;
    username: string;
    country: string;
    contact: string;
    email: string;
    token?: string;
}
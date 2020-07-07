import { Controller, Post, Body, UsePipes, ValidationPipe, Get, Param } from '@nestjs/common';
import { UserService } from './user-service/user.service';
import { UserDTO, UserRO } from './user.dto';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}
    @Get('findById/:id')
    findUserById(@Param('id') id: string) {
        return this.userService.findById(id);
    }

    @Post('login')
    @UsePipes(new ValidationPipe())
    login(@Body() data: UserDTO) {
        return this.userService.login(data);
    }

    @Post('register')
    @UsePipes(new ValidationPipe())
    register(@Body() data: UserDTO) {
        return this.userService.register(data);
    }
}

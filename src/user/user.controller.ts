import { Controller, Post, Body, UsePipes, ValidationPipe, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user-service/user.service';
import { UserDTO, UserRO } from './user.dto';
import { AuthGuard } from 'src/shared/auth.guard';
import { User } from './user.decorator';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    // @Get('/showall')
    // @UseGuards(new AuthGuard())
    // showall(@User() user){
    //     console.log(user);

    // }


    @Get('findById/:id')
    @UseGuards(new AuthGuard())
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

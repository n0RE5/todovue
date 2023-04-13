import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException, UnauthorizedException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt/dist';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcryptjs";
import { User } from 'src/users/users.model';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private jwtService: JwtService) {}

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUser(userDto.email)
        
        if(candidate) {
            throw new HttpException("User with this email already exists", HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user)
    }

    async checkUser(req: any) {
        const token = this.jwtService.sign({email: req.user.email, id: req.user.id})
        return token
    }
    
    async generateToken(user: User) {
        const payload = {email: user.email, id: user.id}
        return {
            token: this.jwtService.sign(payload) 
        }
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUser(userDto.email)
        const passwordHash = await bcrypt.compare(userDto.password, user.password)

        if (user && passwordHash) {
            return user;
        }

        throw new UnauthorizedException({message: "Invalid username or password"})
    }
}

import { LoginDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
export declare class AuthService {
    private userModel;
    private userService;
    private jwtService;
    constructor(userModel: Model<User>, userService: UserService, jwtService: JwtService);
    login(dto: LoginDto): Promise<{
        user: {
            _id: import("mongoose").Types.ObjectId;
            email: string;
            role: string;
            status: string;
        };
        backendTokens: {
            accessToken: string;
            refreshToken: string;
            expiresIn: number;
        };
    }>;
    validateUser(dto: LoginDto): Promise<{
        email: string;
        role: string;
        status: string;
        _id: import("mongoose").Types.ObjectId;
    }>;
    refreshToken(user: any): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresIn: number;
    }>;
}

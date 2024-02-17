import { CreateUserDto } from "src/user/dto/dto/user.dto";
import { UserService } from "src/user/user.service";
import { LoginDto } from "./dto/auth.dto";
import { AuthService } from "./auth.service";
import { Response, Request } from "express";
export declare class AuthController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    registerUser(dto: CreateUserDto): Promise<{
        user: import("mongoose").Document<unknown, {}, import("../user/schemas/user.schema").User> & import("../user/schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        };
        message: string;
    }>;
    login(dto: LoginDto, response: Response): Promise<{
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
    validateSession(request: Request): {
        isAuthenticated: boolean;
        user: import("../types/custom").UserPayload;
    } | {
        isAuthenticated: boolean;
        user?: undefined;
    };
    refreshToken(req: any): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresIn: number;
    }>;
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const user_schema_1 = require("../user/schemas/user.schema");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const EXPIRE_TIME = 20 * 1000;
let AuthService = class AuthService {
    constructor(userModel, userService, jwtService) {
        this.userModel = userModel;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(dto) {
        const user = await this.validateUser(dto);
        const payload = {
            username: user.email,
        };
        const userResponse = {
            _id: user._id,
            email: user.email,
            role: user.role,
            status: user.status,
        };
        return {
            user: userResponse,
            backendTokens: {
                accessToken: await this.jwtService.signAsync(payload, {
                    expiresIn: '24h',
                    secret: process.env.jwtSecretKey,
                }),
                refreshToken: await this.jwtService.signAsync(payload, {
                    expiresIn: '7d',
                    secret: process.env.jwtRefreshTokenKey,
                }),
                expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
            },
        };
    }
    async validateUser(dto) {
        const user = await this.userService.findByEmail(dto.username);
        if (user && (await (0, bcrypt_1.compare)(dto.password, user.password))) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        throw new common_1.UnauthorizedException();
    }
    async refreshToken(user) {
        const payload = {
            username: user.username,
            sub: user.sub,
        };
        return {
            accessToken: await this.jwtService.signAsync(payload, {
                expiresIn: '20s',
                secret: process.env.jwtSecretKey,
            }),
            refreshToken: await this.jwtService.signAsync(payload, {
                expiresIn: '7d',
                secret: process.env.jwtRefreshTokenKey,
            }),
            expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
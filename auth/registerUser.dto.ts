export class RegisterUserDTO {
    password: string;
    verifyPassword: string;
    name: string;
    email: string;
}

export interface IRegisterUserDTO extends RegisterUserDTO {}

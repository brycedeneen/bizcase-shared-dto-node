export class UserDTO {
    userId: string;
    name: string;
    email: string;
    cognitoId: string;
    isActive: boolean;
}

export interface IUserDTO extends UserDTO {}

export class ConfirmResetPasswordDTO {
    email: string;
    password: string;
    verifyPassword: string;
    confirmationCode: string;
}

export interface IConfirmResetPasswordDTO extends ConfirmResetPasswordDTO {}

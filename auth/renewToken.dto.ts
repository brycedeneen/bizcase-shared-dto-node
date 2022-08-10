export class RenewTokenDTO {
    username: string;
    refreshToken: string;
}

export interface IRenewTokenDTO extends RenewTokenDTO {}

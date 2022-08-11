export declare class UserAuthModel {
    userId: string;
    personId: string;
    companyId: string;
    email: string;
    impersonateUserId: string;
    impersonateCompanyId: string;
    token: string;
    refreshToken: string;
    constructor();
}
export interface IUserAuthModel extends UserAuthModel {
}

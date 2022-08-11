export declare class UserAuthModel {
    userId: string;
    companyId: string;
    name: string;
    developmentCycleId: string;
    email: string;
    impersonateUserId: string;
    impersonateCompanyId: string;
    token: string;
    refreshToken: string;
    constructor();
}
export interface IUserAuthModel extends UserAuthModel {
}

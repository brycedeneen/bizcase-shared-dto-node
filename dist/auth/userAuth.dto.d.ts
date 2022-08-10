export declare class UserAuthModel {
    userId: string;
    employeeId: string;
    personId: string;
    companyId: string;
    email: string;
    impersonateEmployeeId: string;
    impersonateEmployerId: string;
    token: string;
    refreshToken: string;
    constructor();
}
export interface IUserAuthModel extends UserAuthModel {
}

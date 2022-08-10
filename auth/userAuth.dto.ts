export class UserAuthModel {
    userId: string;
    employeeId: string;
    personId: string;
    companyId: string;
    email: string;
    impersonateEmployeeId: string;
    impersonateEmployerId: string;
    token: string;
    refreshToken: string;

    constructor() {
        this.userId = '';
        this.personId = '';
        this.employeeId = '';
        this.companyId = '';
        this.email = '';
        this.token = '';
        this.refreshToken = '';

        this.impersonateEmployeeId = '';
        this.impersonateEmployerId = '';
    }
}

export interface IUserAuthModel extends UserAuthModel {}

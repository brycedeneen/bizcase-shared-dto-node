export class UserAuthModel {
    userId: string;
    companyId: string;
    name: string;
    developmentCycleId: string;
    email: string;
    impersonateUserId: string;
    impersonateCompanyId: string;
    token: string;
    refreshToken: string;

    constructor() {
        this.userId = '';
        this.companyId = '';
        this.name = '';
        this.developmentCycleId = '';
        this.email = '';
        this.token = '';
        this.refreshToken = '';

        this.impersonateUserId = '';
        this.impersonateCompanyId = '';
    }
}

export interface IUserAuthModel extends UserAuthModel {}

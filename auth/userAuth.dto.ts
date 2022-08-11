export class UserAuthModel {
    userId: string;
    personId: string;
    companyId: string;
    email: string;
    impersonateUserId: string;
    impersonateCompanyId: string;
    token: string;
    refreshToken: string;

    constructor() {
        this.userId = '';
        this.personId = '';
        this.companyId = '';
        this.email = '';
        this.token = '';
        this.refreshToken = '';

        this.impersonateUserId = '';
        this.impersonateCompanyId = '';
    }
}

export interface IUserAuthModel extends UserAuthModel {}

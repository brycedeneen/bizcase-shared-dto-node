import { UserIdCompanyIdAccessDTO } from './userIdCompanyIdAccess.dto';

export class UserAccessDTO {
    userId: string;
    userIdCompanyIdAccess: UserIdCompanyIdAccessDTO[];
}

export interface IUserAccessDTO extends UserAccessDTO {}

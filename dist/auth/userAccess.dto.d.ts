import { UserIdCompanyIdAccessDTO } from './userIdCompanyIdAccess.dto';
export declare class UserAccessDTO {
    userId: string;
    userIdCompanyIdAccess: UserIdCompanyIdAccessDTO[];
}
export interface IUserAccessDTO extends UserAccessDTO {
}

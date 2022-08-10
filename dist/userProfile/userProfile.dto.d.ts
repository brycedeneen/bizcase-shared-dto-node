import { PageAccessDTO } from './pageAccess.dto';
export declare class UserProfileDTO {
    userProfileId: string;
    pageAccesses: PageAccessDTO[];
}
export interface IUserProfileDTO extends UserProfileDTO {
}

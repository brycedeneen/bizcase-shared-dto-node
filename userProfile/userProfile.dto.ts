import { ApiProperty } from '@nestjs/swagger';
import { PageAccessDTO } from './pageAccess.dto';

export class UserProfileDTO {
    @ApiProperty({ description: 'User Profile Id' })
    userProfileId: string;

    @ApiProperty({
        description: 'Pages the user has accessed, used for guides',
        isArray: true,
    })
    pageAccesses: PageAccessDTO[];
}
export interface IUserProfileDTO extends UserProfileDTO {}

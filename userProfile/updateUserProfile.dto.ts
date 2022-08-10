import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserProfileDTO {
    @ApiProperty({ description: 'User Profile Id' })
    userProfileId: string;
}
export interface IUpdateUserProfileDTO extends UpdateUserProfileDTO {}

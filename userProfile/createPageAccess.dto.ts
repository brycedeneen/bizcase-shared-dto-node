import { ApiProperty } from '@nestjs/swagger';

export class CreatePageAccessDTO {
    @ApiProperty({ description: 'Page Identifier' })
    pageIdentifier: string;

    @ApiProperty({
        description: 'If the user has accessed this page. Used for Guides',
    })
    hasAccessedPage: boolean;

    @ApiProperty({ description: 'Version of the page that was last accessed' })
    version: number;
}
export interface ICreatePageAccessDTO extends CreatePageAccessDTO {}

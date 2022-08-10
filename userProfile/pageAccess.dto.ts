import { ApiProperty } from '@nestjs/swagger';

export class PageAccessDTO {
    @ApiProperty({ description: 'Page Access Id' })
    pageAccessId: string;

    @ApiProperty({ description: 'Page Identifier' })
    pageIdentifier: string;

    @ApiProperty({ description: 'Version of the page that was last accessed' })
    version: number;

    @ApiProperty({
        description: 'If the user has accessed this page. Used for Guides',
    })
    hasAccessedPage: boolean;
}
export interface IPageAccessDTO extends PageAccessDTO {}

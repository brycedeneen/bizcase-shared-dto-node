import { ApiProperty } from '@nestjs/swagger';

export class ThemeDTO {
    @ApiProperty({ description: 'Theme Id' })
    themeId: string;

    @ApiProperty({ description: 'Name of the theme' })
    name: string;

    @ApiProperty({ description: 'Description of the theme' })
    description: string;

    @ApiProperty({
        description: 'Is this theme active',
    })
    isActive: boolean;
}

export interface IThemeDTO extends ThemeDTO {}

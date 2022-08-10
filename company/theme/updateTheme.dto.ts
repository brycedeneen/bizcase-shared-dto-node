import { ApiProperty } from '@nestjs/swagger';

export class UpdateThemeDTO {
    @ApiProperty({ description: 'Name of the theme' })
    name: string;

    @ApiProperty({ description: 'Description of the theme' })
    description: string;
}

export interface IUpdateThemeDTO extends UpdateThemeDTO {}

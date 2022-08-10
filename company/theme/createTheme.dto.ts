import { ApiProperty } from '@nestjs/swagger';

export class CreateThemeDTO {
    @ApiProperty({ description: 'Name of the theme' })
    name: string;

    @ApiProperty({ description: 'Description of the theme' })
    description: string;
}

export interface ICreateThemeDTO extends CreateThemeDTO {}

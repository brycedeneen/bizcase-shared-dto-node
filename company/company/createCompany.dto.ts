import { ApiProperty } from '@nestjs/swagger';
import { RegisterUserV1DTO } from '../../auth';

export class CreateCompanyDTO {
    @ApiProperty()
    name: string;

    @ApiProperty()
    primaryUser: RegisterUserV1DTO;
}

export interface ICreateCompanyDTO extends CreateCompanyDTO {}

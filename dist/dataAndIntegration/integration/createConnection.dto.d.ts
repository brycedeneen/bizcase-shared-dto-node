import { ConnectionTypeENUM } from '../../enums/dataAndIntegration';
export declare class CreateConnectionDTO {
    userName: string;
    password: string;
    apiKey: string;
    certificate: string;
    connectionType: ConnectionTypeENUM;
}
export interface ICreateConnectionDTO extends CreateConnectionDTO {
}

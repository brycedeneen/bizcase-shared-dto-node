import { ConnectionTypeENUM } from '../../enums/dataAndIntegration';
export declare class ConnectionDTO {
    connectionId: string;
    isSystemDelivered: boolean;
    userName: string;
    password: string;
    apiKey: string;
    certificate: string;
    connectionType: ConnectionTypeENUM;
    companyId: string;
    userId: string;
}
export interface IConnectionDTO extends ConnectionDTO {
}

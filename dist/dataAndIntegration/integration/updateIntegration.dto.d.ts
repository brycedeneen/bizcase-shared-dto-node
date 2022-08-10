import { IntegrationTypeENUM } from '../../enums/dataAndIntegration';
export declare class UpdateIntegrationDTO {
    name: string;
    description: string;
    integrationType: IntegrationTypeENUM;
    connectionId: string;
}
export interface IUpdateIntegrationDTO extends UpdateIntegrationDTO {
}

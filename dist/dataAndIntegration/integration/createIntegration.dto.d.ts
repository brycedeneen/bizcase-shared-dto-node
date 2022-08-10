import { IntegrationTypeENUM } from '../../enums/dataAndIntegration';
export declare class CreateIntegrationDTO {
    name: string;
    description: string;
    integrationType: IntegrationTypeENUM;
}
export interface ICreateIntegrationDTO extends CreateIntegrationDTO {
}

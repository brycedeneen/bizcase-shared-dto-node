import { DownloadTypeENUM, IntegrationTypeENUM } from '../../enums/dataAndIntegration';
import { IntegrationMappingV1DTO } from '../integrationMapping';
export declare class IntegrationDTO {
    integrationId: string;
    name: string;
    description: string;
    isStandardConfiguration: boolean;
    integrationType: IntegrationTypeENUM;
    downloadType: DownloadTypeENUM;
    integrationMappings: IntegrationMappingV1DTO[];
    connectionId: string;
    isActive: boolean;
    companyId: string;
}
export interface IIntegrationDTO extends IntegrationDTO {
}

import { DataObjectENUM } from '../../enums/dataAndIntegration';
import { AuditV1DTO } from '../../shared/audit';
import { IntegrationMappingFieldDTO } from './integrationMappingField.dto';
export declare class IntegrationMappingDTO {
    integrationMappingId: string;
    dataObject: DataObjectENUM;
    integrationMappingFields: IntegrationMappingFieldDTO[];
    isActive: boolean;
    companyId: string;
    auditData: AuditV1DTO;
}
export interface IIntegrationMappingDTO extends IntegrationMappingDTO {
}

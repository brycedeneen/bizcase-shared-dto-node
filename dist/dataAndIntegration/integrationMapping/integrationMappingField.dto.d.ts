import { FieldTypeENUM } from '../../enums/dataAndIntegration/fieldType.enum';
import { AuditV1DTO } from '../../shared/audit';
export declare class IntegrationMappingFieldDTO {
    integrationMappingFieldId: string;
    fieldName: string;
    outputField: string;
    fieldType: FieldTypeENUM;
    sourceFormat: string;
    outputFormat: string;
    displayDecimals: number;
    fieldOrder: number;
    isActive: boolean;
    companyId: string;
    integrationId: string;
    integrationMappingId: string;
    auditData: AuditV1DTO;
}
export interface IIntegrationMappingFieldDTO extends IntegrationMappingFieldDTO {
}

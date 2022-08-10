import { FieldTypeENUM, IntegrationTypeENUM } from '../../enums/dataAndIntegration';
export declare class ExportableFieldDTO {
    exportableFieldId: string;
    integrationType: IntegrationTypeENUM;
    fieldName: string;
    displayName: string;
    fieldType: FieldTypeENUM;
    sourceFormat: string;
    hasDecimals: boolean;
}
export interface IExportableFieldDTO extends ExportableFieldDTO {
}

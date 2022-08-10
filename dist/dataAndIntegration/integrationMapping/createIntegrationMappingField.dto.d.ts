import { FieldTypeENUM } from '../../enums/dataAndIntegration/fieldType.enum';
export declare class CreateIntegrationMappingFieldDTO {
    fieldName: string;
    outputField: string;
    fieldType: FieldTypeENUM;
    sourceFormat: string;
    outputFormat: string;
    displayDecimals: number;
    fieldOrder: number;
}
export interface ICreateIntegrationMappingFieldDTO extends CreateIntegrationMappingFieldDTO {
}

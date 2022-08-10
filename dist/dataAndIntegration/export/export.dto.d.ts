import { ProcessStatusENUM } from '../../enums/dataAndIntegration';
export declare class ExportDTO {
    exportId: string;
    s3FileLocation: string;
    processStatus: ProcessStatusENUM;
    payrollPeriodSegmentId: string;
    payrollPeriodId: string;
    integrationId: string;
    companyId: string;
    userId: string;
    createdDate: Date;
    updatedDate: Date;
}
export interface IExportDTO extends ExportDTO {
}

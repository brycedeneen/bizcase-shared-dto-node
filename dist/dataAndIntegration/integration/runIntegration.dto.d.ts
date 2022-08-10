import { DownloadTypeENUM } from '../../enums/dataAndIntegration';
export declare class RunIntegrationDTO {
    payrollPeriodId: string;
    payrollPeriodSegmentId: string;
    downloadTypeOverride: DownloadTypeENUM;
}
export interface IRunIntegrationDTO extends RunIntegrationDTO {
}

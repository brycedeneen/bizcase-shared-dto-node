import { PayrollDateSegmentDTO } from './payrollDateSegment.dto';
export declare class PayrollPeriodSegmentDTO {
    startDateKey: string;
    startDate: Date;
    endDate: Date;
    payrollDateSegments: PayrollDateSegmentDTO[];
}
export interface IPayrollPeriodSegmentDTO extends PayrollPeriodSegmentDTO {
}

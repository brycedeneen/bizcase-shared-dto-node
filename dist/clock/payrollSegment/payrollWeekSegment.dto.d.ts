import { PayrollDateSegmentDTO } from './payrollDateSegment.dto';
export declare class PayrollWeekSegmentDTO {
    startDateKey: string;
    startDate: Date;
    endDate: Date;
    payrollDateSegments: PayrollDateSegmentDTO[];
}
export interface IPayrollWeekSegmentDTO extends PayrollWeekSegmentDTO {
}

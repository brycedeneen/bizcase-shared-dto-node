import { PayrollSegmentDTO } from './payrollSegment.dto';
export declare class PayrollDateSegmentDTO {
    payrollDateKey: string;
    payrollDate: Date;
    payrollSegments: PayrollSegmentDTO[];
}
export interface IPayrollDateSegmentDTO extends PayrollDateSegmentDTO {
}

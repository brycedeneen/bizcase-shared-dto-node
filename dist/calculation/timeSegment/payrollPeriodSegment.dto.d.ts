import { PayrollPeriodSegmentDTO } from '../../company/payrollPeriodSegment/payrollPeriodSegment.dto';
import { TimeSegmentInToOutSegmentDTO } from './inToOutSegment.dto';
export declare class TimeSegmentPayrollPeriodSegmentDTO {
    payrollPeriodSegment: PayrollPeriodSegmentDTO;
    inToOutSegments: TimeSegmentInToOutSegmentDTO[];
}
export interface ITimeSegmentPayrollPeriodSegmentDTO extends TimeSegmentPayrollPeriodSegmentDTO {
}

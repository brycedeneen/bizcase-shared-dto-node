import { PayrollSegmentDTO } from '../../clock/payrollSegment/payrollSegment.dto';
import { CalculationPolicyDTO } from '../../company/calculationPolicy/calculationPolicy.dto';
import { PayrollPeriodDTO } from '../../company/payrollPeriod/payrollPeriod.dto';
export declare class TimeSegmentInToOutSegmentDTO {
    inForDayDate: string;
    startDateTimeActual: Date;
    endDateTimeActual: Date;
    startDateTimeRounded: Date;
    endDateTimeRounded: Date;
    payrollDate: Date;
    payrollPeriod: PayrollPeriodDTO;
    calculationPolicy: CalculationPolicyDTO;
    payrollSegments: PayrollSegmentDTO[];
    inForDayMobilePunchId: string;
    inToOutTotalMinutesActual: number;
    inToOutTotalMinutesRounded: number;
}
export interface ITimeSegmentInToOutSegmentDTO extends TimeSegmentInToOutSegmentDTO {
}

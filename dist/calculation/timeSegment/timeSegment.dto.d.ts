import { MobilePunchDTO } from '../../clock/mobilePunch/mobilePunch.dto';
import { CalculationPolicyDTO } from '../../company/calculationPolicy/calculationPolicy.dto';
import { PayrollCodeDTO } from '../../company/payrollCode/payrollCode.dto';
import { PayrollPeriodDTO } from '../../company/payrollPeriod/payrollPeriod.dto';
import { PayrollPeriodSegmentDTO } from '../../company/payrollPeriodSegment/payrollPeriodSegment.dto';
export declare class TimeSegmentDTO {
    inForDayMobilePunchId: string;
    startPunch: MobilePunchDTO;
    endPunch: MobilePunchDTO;
    segmentLengthMinutes: number;
    payrollCode: PayrollCodeDTO;
    payrollPeriod: PayrollPeriodDTO;
    payrollPeriodSegment: PayrollPeriodSegmentDTO;
    calculationPolicy: CalculationPolicyDTO;
}
export interface ITimeSegmentDTO extends TimeSegmentDTO {
}

import { PayrollCodeV1DTO } from '../../company/payrollCode';
import { MobilePunchV1DTO } from '../mobilePunch';
export declare class PayrollSegmentDTO {
    payrollDateKey: string;
    payrollDate: Date;
    startPunch: MobilePunchV1DTO;
    endPunch: MobilePunchV1DTO;
    segmentLengthMinutes: number;
    payrollCode: PayrollCodeV1DTO;
}
export interface IPayrollSegmentDTO extends PayrollSegmentDTO {
}

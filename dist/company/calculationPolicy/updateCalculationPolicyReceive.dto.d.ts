import { ReceiveActionTypeENUM } from '../../enums/calculation';
import { HoursOrDollarsTypeCode } from '../../enums/company';
export declare class UpdateCalculationPolicyReceiveDTO {
    receiveAction: ReceiveActionTypeENUM;
    payrollCodeId: string;
    amount: number;
    unit: HoursOrDollarsTypeCode;
    order: number;
    effectiveDate: string;
}
export interface IUpdateCalculationPolicyReceiveDTO extends UpdateCalculationPolicyReceiveDTO {
}

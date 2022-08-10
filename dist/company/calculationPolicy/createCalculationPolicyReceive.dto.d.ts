import { ReceiveActionTypeENUM } from '../../enums/calculation';
import { HoursOrDollarsTypeCode } from '../../enums/company';
export declare class CreateCalculationPolicyReceiveDTO {
    receiveAction: ReceiveActionTypeENUM;
    payrollCodeId: string;
    amount: number;
    unit: HoursOrDollarsTypeCode;
    order: number;
    effectiveDate: string;
}
export interface ICreateCalculationPolicyReceiveDTO extends CreateCalculationPolicyReceiveDTO {
}

import { PayrollDateBasisENUM } from '../../enums/company';
import { WeekDayENUM } from '../../enums/shared';
export declare class UpdateCalculationPolicyDTO {
    name: string;
    description: string;
    startDayOfWeek: WeekDayENUM;
    payrollDateBasis: PayrollDateBasisENUM;
    effectiveDate: string;
}
export interface IUpdateCalculationPolicyDTO extends UpdateCalculationPolicyDTO {
}

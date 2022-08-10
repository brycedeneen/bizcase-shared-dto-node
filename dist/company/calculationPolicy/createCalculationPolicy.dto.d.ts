import { PayrollDateBasisENUM } from '../../enums/company';
import { WeekDayENUM } from '../../enums/shared';
export declare class CreateCalculationPolicyDTO {
    name: string;
    description: string;
    startDayOfWeek: WeekDayENUM;
    payrollDateBasis: PayrollDateBasisENUM;
    effectiveDate: string;
}
export interface ICreateCalculationPolicyDTO extends CreateCalculationPolicyDTO {
}

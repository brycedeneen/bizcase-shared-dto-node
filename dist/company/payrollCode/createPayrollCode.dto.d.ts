import { HoursOrDollarsTypeCode } from '../../enums/company/hoursOrDollarsTypeCode.enum';
import { PayrollCodeTypeENUM } from '../../enums/company/payrollCodeType.enum';
export declare class CreatePayrollCodeDTO {
    name: string;
    description: string;
    payrollCodeType: PayrollCodeTypeENUM;
    hoursOrDollars: HoursOrDollarsTypeCode;
    payRateMultiplier: number;
    includeInOvertimeCalculation: boolean;
    isWorkedPayType: boolean;
    calculationPriority: number;
    effectiveDate: string;
}
export interface ICreatePayrollCodeDTO extends CreatePayrollCodeDTO {
}

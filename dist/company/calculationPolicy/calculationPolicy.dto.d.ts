import { CalculationPolicyV1DTO } from '.';
import { PayrollDateBasisENUM } from '../../enums/company';
import { WeekDayENUM } from '../../enums/shared';
import { AuditV1DTO } from '../../shared/audit';
import { CalculationPolicyDetailDTO } from './calculationPolicyDetail.dto';
export declare class CalculationPolicyDTO {
    calculationPolicyId: string;
    name: string;
    description: string;
    startDayOfWeek: WeekDayENUM;
    payrollDateBasis: PayrollDateBasisENUM;
    calculationPolicyDetails: CalculationPolicyDetailDTO[];
    isActive: boolean;
    companyId: string;
    effectiveDate: string;
    effectiveDatedRecords: CalculationPolicyV1DTO[];
    auditData: AuditV1DTO;
}
export interface ICalculationPolicyDTO extends CalculationPolicyDTO {
}

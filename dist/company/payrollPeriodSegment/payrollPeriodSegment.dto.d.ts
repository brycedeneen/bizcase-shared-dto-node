export declare class PayrollPeriodSegmentDTO {
    payrollPeriodSegmentId: string;
    firstDateOfPayrollPeriod: string;
    lastDateOfPayrollPeriod: string;
    daysInPayrollPeriod: number;
    isActive: boolean;
    companyId: string;
    payrollPeriodId: string;
}
export interface IPayrollPeriodSegmentDTO extends PayrollPeriodSegmentDTO {
}

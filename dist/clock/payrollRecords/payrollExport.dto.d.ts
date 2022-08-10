export declare class PayrollExportDTO {
    companyId: string;
    employeeId: string;
    employeeName: string;
    employeeNumber: string;
    employeeBadge: string;
    payrollPeriodId: string;
    payrollPeriodName: string;
    payrollPeriodStartDate: string;
    payrollPeriodEndDate: string;
    flsaPayWeekStartDate: string;
    flsaPayWeekEndDate: string;
}
export interface IPayrollExportDTO extends PayrollExportDTO {
}

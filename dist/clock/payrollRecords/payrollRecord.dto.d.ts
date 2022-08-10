import { AuditV1DTO } from '../../shared/audit';
export declare class PayrollRecordDTO {
    payrollRecordId: string;
    payrollDate: Date;
    isAddedByHR: boolean;
    isWorkedTime: boolean;
    isApproved: boolean;
    isLocked: boolean;
    isProcessed: boolean;
    totalSegmentLengthMinutes: number;
    payRate: number;
    segmentDollars: number;
    payrollCodeId: string;
    payrollPeriodId: string;
    payrollPeriodSegmentId: string;
    inForDaySegmentPunchId: string;
    employeeId: string;
    userId: string;
    employeeName: string;
    employeeNumber: string;
    employeeBadge: string;
    isActive: boolean;
    companyId: string;
    auditData: AuditV1DTO;
}
export interface IPayrollRecordDTO extends PayrollRecordDTO {
}

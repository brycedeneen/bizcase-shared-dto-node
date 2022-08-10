import { PunchTypeENUM } from '../../enums/clock';
export declare class PunchCorrectionDTO {
    punchCorrectionId: string;
    punchDateTime: Date;
    isMissingPunch: boolean;
    isPunchCorrection: boolean;
    punchType: PunchTypeENUM;
    mobilePunchId: string;
    employeeId: string;
    userId: string;
    companyId: string;
}
export interface IPunchCorrectionDTO extends PunchCorrectionDTO {
}

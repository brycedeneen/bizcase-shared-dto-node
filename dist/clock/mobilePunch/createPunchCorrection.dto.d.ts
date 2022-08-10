import { PunchTypeENUM } from '../../enums/clock';
export declare class CreatePunchCorrectionDTO {
    punchDateTime: Date;
    isMissingPunch: boolean;
    isPunchCorrection: boolean;
    punchType: PunchTypeENUM;
    employeeId: string;
    userId: string;
    companyId: string;
}
export interface ICreatePunchCorrectionDTO extends CreatePunchCorrectionDTO {
}

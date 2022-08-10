import { PunchTypeENUM } from '../../enums/clock';
import { PunchCorrectionDTO } from './punchCorrection.dto';
export declare class MobilePunchDTO {
    mobilePunchId: string;
    sourcePunchDateTime: Date;
    serverPunchDateTime: Date;
    punchDateTime: Date;
    isMissingPunch: boolean;
    isPunchCorrection: boolean;
    mobilePunchCorrectionId: string;
    punchType: PunchTypeENUM;
    punchCorrections: PunchCorrectionDTO[];
    userId: string;
    inForDaySegmentPunchId: string;
    employeeId: string;
    companyId: string;
    employeeIdentification: string;
    companyIdentification: string;
    latitude: number;
    longitude: number;
    isApproved: boolean;
    isLocked: boolean;
    isProcessed: boolean;
}
export interface IMobilePunchDTO extends MobilePunchDTO {
}

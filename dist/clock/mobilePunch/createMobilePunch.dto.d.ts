import { PunchTypeENUM } from '../../enums/clock';
export declare class CreateMobilePunchDTO {
    sourcePunchDateTime: Date;
    punchDateTime: Date;
    mobilePunchCorrectionId: string;
    isMissingPunch: boolean;
    isPunchCorrection: boolean;
    punchType: PunchTypeENUM;
    employeeId: string;
    companyId: string;
    employeeIdentification: string;
    companyIdentification: string;
    latitude: number;
    longitude: number;
}
export interface ICreateMobilePunchDTO extends CreateMobilePunchDTO {
}

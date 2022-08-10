import { TimeSegmentInToOutSegmentDTO } from './inToOutSegment.dto';
export declare class TimeSegmentWeekSegmentDTO {
    weekSegmentKey: string;
    startDate: Date;
    endDate: Date;
    inToOutSegments: TimeSegmentInToOutSegmentDTO[];
}
export interface ITimeSegmentWeekSegmentDTO extends TimeSegmentWeekSegmentDTO {
}

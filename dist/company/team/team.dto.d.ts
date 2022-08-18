import { TeamFTEV1DTO } from '.';
export declare class TeamDTO {
    teamId: string;
    name: string;
    percentAllocatedToDevelopment: number;
    percentAllocatedToPrioritizedConcepts: number;
    percentOfYearTeamIsActive: number;
    calculatedDevelopmentCapacityInWeeks: number;
    calculatedPrioritizedConceptsCapacityInWeeks: number;
    calculatedTotalCosts: number;
    teamFTEs: TeamFTEV1DTO[];
    isActive: boolean;
}
export interface ITeamDTO extends TeamDTO {
}

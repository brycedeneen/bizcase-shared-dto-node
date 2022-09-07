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
    calculatedDevelopmentWeekTotalCosts: number;
    calculatedTotalTeamMembers: number;
    calculatedTotalDeveloperTeamMembers: number;
    calculatedConceptDevelopmentWeekCost: number;
    overrideConceptDevelopmentWeekCost: number;
    teamFTEs: TeamFTEV1DTO[];
    isActive: boolean;
}
export interface ITeamDTO extends TeamDTO {
}

export declare class TeamDTO {
    teamId: string;
    name: string;
    percentAllocatedToDevelopment: number;
    percentAllocatedToPrioritizedConcepts: number;
    percentOfYearTeamIsActive: number;
    calculatedDevelopmentCapacityInWeeks: number;
    calculatedPrioritizedConceptsCapacityInWeeks: number;
    isActive: boolean;
}
export interface ITeamDTO extends TeamDTO {
}

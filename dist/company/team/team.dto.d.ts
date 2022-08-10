export declare class TeamDTO {
    teamId: string;
    name: string;
    percentAllocatedToDevelopment: number;
    percentAllocatedToPrioritizedConcepts: number;
    percentOfYearTeamIsActive: number;
    calculatedDevelopmentCapacityInWeeks: any;
    calculatedPrioritizedConceptsCapacityInWeeks: any;
    isActive: boolean;
}
export interface ITeamDTO extends TeamDTO {
}

export declare class CreateTeamDTO {
    name: string;
    percentAllocatedToDevelopment: number;
    percentAllocatedToPrioritizedConcepts: number;
    percentOfYearTeamIsActive: number;
    overrideConceptDevelopmentWeekCost: any;
}
export interface ICreateTeamDTO extends CreateTeamDTO {
}

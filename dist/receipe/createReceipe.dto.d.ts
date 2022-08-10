export declare class CreateReceipeDTO {
    name: string;
    description: string;
    receipeDate: Date;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    totalTimeMinutes: number;
    servings: number;
}
export interface ICreateReceipeDTO extends CreateReceipeDTO {
}

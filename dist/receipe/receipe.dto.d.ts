import { PersonV1DTO } from '../shared/person';
import { ReceipeIngredientDTO } from './receipeIngredient.dto';
import { ReceipeStepDTO } from './receipeStep.dto';
export declare class ReceipeDTO {
    receipeId: string;
    name: string;
    description: string;
    receipeDate: Date;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    totalTimeMinutes: number;
    servings: number;
    person: PersonV1DTO;
    personId: string;
    steps: ReceipeStepDTO[];
    ingredients: ReceipeIngredientDTO[];
}
export interface IReceipeDTO extends ReceipeDTO {
}

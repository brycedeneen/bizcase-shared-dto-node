import { ReceipeUnitOfMeasureENUM } from '../enums/receipe';
export declare class CreateUpdateReceipeIngredientDTO {
    name: string;
    amount: number;
    receipeUnitOfMeasure: ReceipeUnitOfMeasureENUM;
}
export interface ICreateUpdateReceipeIngredientDTO extends CreateUpdateReceipeIngredientDTO {
}

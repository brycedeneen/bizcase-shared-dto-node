import { ReceipeUnitOfMeasureENUM } from '../enums/receipe';
export declare class ReceipeIngredientDTO {
    receipeIngredientId: string;
    name: string;
    amount: number;
    receipeUnitOfMeasure: ReceipeUnitOfMeasureENUM;
    receipeId: string;
}
export interface IReceipeIngredientDTO extends ReceipeIngredientDTO {
}

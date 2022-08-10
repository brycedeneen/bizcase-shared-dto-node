import { AddressTypeENUM } from '../../enums/shared';
export declare class CreateAddressDTO {
    addressType: AddressTypeENUM;
    line1: string;
    line2: string;
    locality: string;
    regionOrState: string;
    postalCode: string;
    countryISOCode: string;
}
export interface ICreateAddressDTO extends CreateAddressDTO {
}

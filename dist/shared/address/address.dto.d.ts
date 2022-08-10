import { AddressTypeENUM } from '../../enums/shared';
export declare class AddressDTO {
    addressId: string;
    addressType: AddressTypeENUM;
    line1: string;
    line2: string;
    locality: string;
    regionOrState: string;
    postalCode: string;
    countryISOCode: string;
    isActive: boolean;
}
export interface IAddressDTO extends AddressDTO {
}

export class AddressModel {
     label :  string;
     countryCode :   string;
     countryName :   string;
     state :   string;
     county :   string;
     city :   string;
     postalCode : string;
}
export class PosicionModel {
    lat: number;
    lng: number;
}

export class SearchModel {
    position:PosicionModel;
    address:AddressModel;
}
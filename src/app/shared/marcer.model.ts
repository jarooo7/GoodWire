export class DateModel {
        pm1: number;
        pm25: number;
        id: number;
        pm10: number;
        created_at:Date;
        location: string;
        device_id:string;
        temperature: number;
        pressure: number;
        humidity: number;
        HS: number;
        NH: number;
        NO: number;
        VO: number;
        CO: number;
}
export class MarcerModel {
    lat: number;
    lng: number;
    pm1: number;
    created_at:Date;
    id: number;
    pm25: number;
    pm10: number;
    device_id:string;
    temperature: number;
    pressure: number;
    humidity: number;
    HS: number;
    NH: number;
    NO: number;
    VO: number;
    CO: number;
}
export class RangeModel {
    hStart: number;
    hEnd:number;
    dStart:Date;
    dEnd:Date;
}

export class DeviceModel {
    key:string;
    created_at:Date;
    tel:string;
    state: string;
   
}

export class CodeModel {
    base_key:string;
    created_at:Date;
    id:number;   
}


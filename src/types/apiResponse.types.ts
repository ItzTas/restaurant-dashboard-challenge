// these types were generated in https://app.quicktype.io acording to the api response

export interface AreasResponse {
    id: string;
    name: string;
    sheetLabel: string;
    description: string;
    maxIdleTime: number;
    serviceModel: string;
    operationType: string;
    checkpadModels: CheckpadModel[];
    checkpadQuantity: number;
    sheetLabelPlural: string;
    maxIdleTimeEnabled: number;
    checkpadModelQuantity: number;
    defaultVizualizationList: string;
}

export interface CheckpadModel {
    id: number;
    icon: Icon;
    name: Model;
}

export enum Icon {
    Apartment = "apartment",
    TableRestaurant = "table-restaurant",
    Tent = "tent",
}

export enum Model {
    Apartamento = "Apartamento",
    Barraca = "Barraca",
    Mesa = "Mesa",
}

export interface CheckpadsResponse {
    [key: string]: CheckpadValue;
}

export interface CheckpadValue {
    id: number;
    hash: string;
    model: Model;
    modelIcon: Icon;
    activity: Activity;
    hasOrder: number;
    idleTime: number | null;
    subtotal: number | null;
    authorName?: string | null;
    identifier: string;
    orderSheetIds: number[];
    hasOrderSheets: boolean;
    lastOrderCreated: Date | null;
    numberOfCustomers: number | null;
    customerIdentifier: string | null;
}

export enum Activity {
    Active = "active",
    Empty = "empty",
    Inactive = "inactive",
}

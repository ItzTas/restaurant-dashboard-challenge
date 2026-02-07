// these types were generated in https://app.quicktype.io and https://transform.tools/json-to-typescript and they were modified to match the api

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

export interface OrdersheetsResponse {
    [id: string]: OrderSheet;
}

export interface OrderSheet {
    id: number;
    author: Author;
    opened: string;
    contact: string;
    checkpad: Checkpad;
    hasOrder: number;
    idleTime: number;
    subtotal: number;
    identifier: string | null;
    customerName: string;
    mainIdentifier: string;
    numberOfCustomers: number;
}

export interface Author {
    id: number;
    name: string;
    type: string;
}

export interface Checkpad {
    id: number;
    hash: string;
    model: string;
    modelIcon: string;
    identifier: string;
}

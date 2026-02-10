import { ApiActivity, Model, ModelIcon } from "@/constants/api";

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
    icon: ModelIcon;
    name: Model;
}

export type ModelIcon = (typeof ModelIcon)[keyof typeof ModelIcon];

export type Model = (typeof Model)[keyof typeof Model];

export type Activity = (typeof ApiActivity)[keyof typeof ApiActivity];

export interface CheckpadsResponse {
    [key: string]: CheckpadValue;
}

export interface CheckpadValue {
    id: number;
    hash: string;
    model: Model;
    modelIcon: ModelIcon;
    activity: Activity;
    hasOrder: number;
    idleTime: number | null;
    subtotal: number | null;
    authorName?: string | null;
    identifier: string;
    orderSheetIds: number[];
    hasOrderSheets: boolean;
    lastOrderCreated: string | Date | null;
    numberOfCustomers: number | null;
    customerIdentifier: string | null;
}

export interface OrdersheetsResponse {
    [id: string]: OrdersheetValue;
}

export interface OrdersheetValue {
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

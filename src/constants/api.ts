export const apiUrl = process.env["API_URL"] || "http://localhost:3001";

export const ModelIcon = {
    Apartment: "apartment",
    TableRestaurant: "table-restaurant",
    Tent: "tent",
} as const;

export const Model = {
    Apartamento: "Apartamento",
    Barraca: "Barraca",
    Mesa: "Mesa",
} as const;

export const Activity = {
    Active: "active",
    Empty: "empty",
    Inactive: "inactive",
} as const;

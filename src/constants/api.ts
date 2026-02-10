export const apiUrl = process.env["API_URL"] || "http://localhost:3001";

export const CheckpadModelIcon = {
    Apartment: "apartment",
    Tent: "tent",
    TableRestaurant: "table-restaurant",
} as const;

export const CheckpadModel = {
    Apartamento: "Apartamento",
    Barraca: "Barraca",
    Mesa: "Mesa",
} as const;

export const Activity = {
    Active: "active",
    Empty: "empty",
    Inactive: "inactive",
} as const;

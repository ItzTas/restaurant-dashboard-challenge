export const DashboardSlugsObj = {
    Ordersheets: "comandas",
    Areas: "locais",
} as const;

export const DashboardSlugsArray = Object.freeze(
    Object.values(DashboardSlugsObj),
) as readonly (typeof DashboardSlugsObj)[keyof typeof DashboardSlugsObj][];

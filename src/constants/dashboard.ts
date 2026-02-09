export const DashboardSlugsObj = {
    Ordersheets: "ordersheets",
    Areas: "areas",
} as const;

export const DashboardSlugsArray = Object.freeze(
    Object.values(DashboardSlugsObj),
) as readonly (typeof DashboardSlugsObj)[keyof typeof DashboardSlugsObj][];

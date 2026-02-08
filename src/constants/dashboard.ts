export const DashboardValidSlugs = {
    Ordersheets: "ordersheets",
    Areas: "areas",
} as const;

export const DashboardValidSlugsArray = Object.freeze(
    Object.values(DashboardValidSlugs),
) as readonly (typeof DashboardValidSlugs)[keyof typeof DashboardValidSlugs][];

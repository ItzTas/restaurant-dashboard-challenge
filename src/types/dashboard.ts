import { DashboardSlugsObj } from "@/constants/dashboard";

export type DashboardSlug =
    (typeof DashboardSlugsObj)[keyof typeof DashboardSlugsObj];

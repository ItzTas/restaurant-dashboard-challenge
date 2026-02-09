import { DashboardSlugsArray } from "@/constants/dashboard";
export function generateStaticParams() {
    return DashboardSlugsArray.map((slug) => ({ slug }));
}

export default async function Dashboard() {
    return <></>;
}

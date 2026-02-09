import DashboardCardsList from "@/components/cards/DashboardCardsList";
import { DashboardValidSlugsArray } from "@/constants/dashboard";
export function generateStaticParams() {
    return DashboardValidSlugsArray.map((slug) => ({ slug }));
}

interface DashboardProps {
    params: Promise<{ slug: (typeof DashboardValidSlugsArray)[number] }>;
}

export default async function Dashboard({ params }: DashboardProps) {
    const { slug } = await params;

    return <DashboardCardsList slug={slug} />;
}

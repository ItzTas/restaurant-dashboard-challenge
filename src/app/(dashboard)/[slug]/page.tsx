import NavOptions, { TabItem } from "@/components/buttons/NavOptions";
import { DashboardValidSlugsArray } from "@/constants/dashboard";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return DashboardValidSlugsArray.map((slug) => ({ slug }));
}

interface DashboardProps {
    params: Promise<{ slug: (typeof DashboardValidSlugsArray)[number] }>;
}

export default async function Dashboard({ params }: DashboardProps) {
    const { slug } = await params;

    if (!DashboardValidSlugsArray.includes(slug)) {
        notFound();
    }

    const tabs: TabItem[] = DashboardValidSlugsArray.map((slug) => ({
        label: slug,
        path: `${slug}`,
    }));

    return (
        <div>
            <NavOptions tabs={tabs} />
        </div>
    );
}

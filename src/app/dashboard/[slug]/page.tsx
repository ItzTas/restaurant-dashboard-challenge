import { notFound } from "next/navigation";

const validSlugs = ["ordersheets", "areas"] as const;

export function generateStaticParams() {
    return validSlugs.map((slug) => ({ slug }));
}

interface DashboardProps {
    params: Promise<{ slug: (typeof validSlugs)[number] }>;
}

export default async function Dashboard({ params }: DashboardProps) {
    const { slug } = await params;

    if (!validSlugs.includes(slug)) {
        notFound();
    }

    return <div>Conteúdo da página: {slug}</div>;
}

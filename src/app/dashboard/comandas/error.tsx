"use client";

import DashboardError from "@/components/feedback/DashboardError";

export default function Error({ reset }: { error: Error; reset: () => void }) {
    return <DashboardError title="Erro ao carregar" onRetry={reset} />;
}

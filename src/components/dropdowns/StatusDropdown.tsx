import { ApiActivity } from "@/types/api";
import DropdownPrimary from "./DropdownPrimary";

type Activity = ApiActivity | "all";

interface Option {
    id: Activity;
    label: string;
    subtitle?: string;
}

export default function StatusDropdown() {
    const options: Option[] = [
        {
            id: "all",
            label: "Visão Geral",
            subtitle: "todas as areas",
        },
        {
            id: "active",
            label: "Ativos",
        },
        {
            id: "inactive",
            label: "Inativos",
        },
        {
            id: "empty",
            label: "Vazios",
        },
    ];

    return <DropdownPrimary options={options} />;
}

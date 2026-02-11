"use client";

import { ApiActivity } from "@/types/api";
import DropdownPrimary, { DropDownPrimaryOption } from "./DropdownPrimary";
import { useDispatch } from "react-redux";
import { setStatusFilter } from "@/features/filters/slice";

type Activity = ApiActivity | "all";

interface Option {
    id: Activity;
    label: string;
    subtitle?: string;
}

export default function StatusDropdown() {
    const dispatcher = useDispatch();

    const options: Option[] = [
        {
            id: "all",
            label: "Visão Geral",
            subtitle: "todos os status",
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

    function handleChange(option: DropDownPrimaryOption) {
        if (option.id === "all") {
            dispatcher(setStatusFilter(""));
            return;
        }

        dispatcher(setStatusFilter(option.id));
    }

    return <DropdownPrimary onChange={handleChange} options={options} />;
}

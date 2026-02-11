"use client";

import { WaiterName } from "@/types/waiters";
import DropdownSecondary from "./DropdownSecondary";
import { WaiterNamesArray } from "@/constants/waiters";
import { DropdownSelectOption } from "@/types/dropdown";
import { useDispatch } from "react-redux";
import { setWaiterFilter } from "@/features/filters/slice";

type WaiterOption = WaiterName | "all";

interface Option {
    id: WaiterOption;
    label: string;
    subtitle?: string;
}

export default function WaitersDropdown() {
    const dispatch = useDispatch();

    const options: Option[] = [
        {
            id: "all",
            label: "Todos atendentes",
        },
    ];

    for (const waiter of WaiterNamesArray) {
        options.push({
            id: waiter,
            label: waiter,
        });
    }

    function handleChange(option: DropdownSelectOption) {
        if (option.id === "all") {
            dispatch(setWaiterFilter(""));
            return;
        }
        dispatch(setWaiterFilter(option.id));
    }

    return <DropdownSecondary onChange={handleChange} options={options} />;
}

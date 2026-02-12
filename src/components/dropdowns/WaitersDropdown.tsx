"use client";

import { WaiterName } from "@/types/waiters";
import DropdownSecondary from "./DropdownSecondary";
import { WaiterNamesArray } from "@/constants/waiters";
import { DropdownSelectOption } from "@/types/dropdown";
import { useDispatch } from "react-redux";
import { setWaiterFilter } from "@/features/filters/slice";
import { useFilterWaiter } from "@/features/filters/hooks";
import { getDefaultOption } from "@/utils/filters";

type WaiterOption = WaiterName | "all";

interface Option {
    id: WaiterOption;
    label: string;
    subtitle?: string;
}

export default function WaitersDropdown() {
    const dispatch = useDispatch();
    const waiterFilter = useFilterWaiter();

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

    const defaultValue = getDefaultOption(options, waiterFilter);

    function handleChange(option: DropdownSelectOption) {
        if (option.id === "all") {
            dispatch(setWaiterFilter(""));
            return;
        }
        dispatch(setWaiterFilter(option.id));
    }

    return (
        <DropdownSecondary
            defaultValue={defaultValue}
            onChange={handleChange}
            options={options}
        />
    );
}

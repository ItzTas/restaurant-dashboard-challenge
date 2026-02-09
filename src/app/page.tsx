"use client";

import DropdownPrimary from "@/components/dropdowns/DropdownPrimary";
import { useState } from "react";

export default function Home() {
    const [selectedArea, setSelectedArea] = useState("visao-geral");

    const areas = [
        { id: "visao-geral", label: "Visão Geral", subtitle: "todas as áreas" },
        { id: "salao-principal", label: "Salão Principal" },
        { id: "lounge", label: "Lounge" },
        { id: "area-externa", label: "Área Externa" },
    ];

    return (
        <div style={{ padding: "40px" }}>
            <DropdownPrimary
                options={areas}
                defaultValue={"visao-geral"}
                onChange={(value) => setSelectedArea(value)}
            />
        </div>
    );
}

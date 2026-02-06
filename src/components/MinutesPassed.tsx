"use client";

import { useEffect, useState } from "react";

export interface MinutesPassedProps {
    from?: Date;
}

export default function MinutesPassed({
    from = new Date(),
}: MinutesPassedProps) {
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        function update() {
            const diff = Math.floor((new Date().getTime() - from.getTime()) / 60000);
            setMinutes(diff);
        }

        update();
        const interval = setInterval(update, 60000);

        return () => clearInterval(interval);
    }, [from]);

    return <>{minutes}</>;
}

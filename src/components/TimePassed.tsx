"use client";

import { useEffect, useState } from "react";

export interface MinutesPassedProps {
    from?: Date;
}

export default function TimePassed({ from = new Date() }: MinutesPassedProps) {
    const [timePassed, setTimePassed] = useState(0);

    useEffect(() => {
        function update() {
            const diff = Math.floor((new Date().getTime() - from.getTime()) / 60000);
            setTimePassed(diff);
        }

        update();
        const interval = setInterval(update, 60000);

        return () => clearInterval(interval);
    }, [from]);

    if (timePassed <= 120) {
        return <>{timePassed}m</>;
    }

    const hours = Math.floor(timePassed / 60);
    return <>{hours}h</>;
}

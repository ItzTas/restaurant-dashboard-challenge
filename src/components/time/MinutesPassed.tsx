export interface MinutesPassedProps {
    idleTime: number;
}

export default function MinutesPassed({ idleTime }: MinutesPassedProps) {
    const minutes = Math.floor(idleTime / 60);
    return <>{minutes} min</>;
}

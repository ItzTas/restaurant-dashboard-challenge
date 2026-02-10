import TimerIcon from "../icons/TimerIcon";
import RoomServiceIcon from "../icons/RoomServiceIcon";
import TimePassed from "../time/TimePassed";
import MinutesPassed from "../time/MinutesPassed";
import { descriptionIconProps } from "../../constants/iconPresets";
import CardFooter from "./CardFooter";
import CardFooterColumn from "./CardFooterColumn";

export interface CardSummaryFooterProps {
    from?: Date;
    idleTime?: number;
    waiter: string;
    price: number;
}

export default function CardSummaryFooter({
    from,
    idleTime,
    waiter,
    price,
}: CardSummaryFooterProps) {
    return (
        <CardFooter>
            <CardFooterColumn>
                <TimerIcon {...descriptionIconProps} />
                <span>
                    {idleTime !== undefined ? (
                        <MinutesPassed idleTime={idleTime} />
                    ) : from ? (
                        <TimePassed from={from} />
                    ) : (
                        "--"
                    )}
                </span>
            </CardFooterColumn>
            <CardFooterColumn>
                <RoomServiceIcon {...descriptionIconProps} />
                <span>{waiter}</span>
            </CardFooterColumn>
            <div>R${price}</div>
        </CardFooter>
    );
}

import TimerIcon from "../icons/TimerIcon";
import RoomServiceIcon from "../icons/RoomServiceIcon";
import MinutesPassed from "../MinutesPassed";
import { descriptionIconProps } from "../../constants/iconPresets";
import CardFooter from "./CardFooter";

export interface CardSummaryFooterProps {
    createdAt: Date;
    waiter: string;
    price: number;
}

export default function CardSummaryFooter({
    createdAt,
    waiter,
    price,
}: CardSummaryFooterProps) {
    return (
        <CardFooter>
            <div>
                <TimerIcon {...descriptionIconProps} />
                <MinutesPassed from={createdAt} /> min
            </div>
            <div>
                <RoomServiceIcon {...descriptionIconProps} />
                {waiter}
            </div>
            <div>R${price}</div>
        </CardFooter>
    );
}

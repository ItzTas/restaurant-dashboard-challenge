import TimerIcon from "../icons/TimerIcon";
import RoomServiceIcon from "../icons/RoomServiceIcon";
import TimePassed from "../TimePassed";
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
                <TimePassed from={createdAt} />
            </div>
            <div>
                <RoomServiceIcon {...descriptionIconProps} />
                {waiter}
            </div>
            <div>R${price}</div>
        </CardFooter>
    );
}

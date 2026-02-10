import TimerIcon from "../icons/TimerIcon";
import RoomServiceIcon from "../icons/RoomServiceIcon";
import TimePassed from "../TimePassed";
import { descriptionIconProps } from "../../constants/iconPresets";
import CardFooter from "./CardFooter";
import CardFooterColumn from "./CardFooterColumn";

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
            <CardFooterColumn>
                <TimerIcon {...descriptionIconProps} />
                <span>
                    <TimePassed from={createdAt} />
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

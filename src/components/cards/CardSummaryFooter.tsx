import TimerIcon from "../icons/TimerIcon";
import StatusIcon from "../icons/StatusIcon";
import MinutesPassed from "../MinutesPassed";
import { descriptionIconProps } from "../icons/iconPresets";
import CardFooter from "./CardFooter";

export interface CardSummaryFooterProps {
    createdAt: Date;
    status: string;
    price: number;
}

export default function CardSummaryFooter({
    createdAt,
    status,
    price,
}: CardSummaryFooterProps) {
    return (
        <CardFooter>
            <div>
                <TimerIcon {...descriptionIconProps} />
                <MinutesPassed from={createdAt} /> min
            </div>
            <div>
                <StatusIcon {...descriptionIconProps} />
                {status}
            </div>
            <div>R${price}</div>
        </CardFooter>
    );
}

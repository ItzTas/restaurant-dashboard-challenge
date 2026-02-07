import ReceiptIcon from "./icons/ReceiptIcon";
import React, { cloneElement, JSX, SVGProps } from "react";
import CallIcon from "./icons/CallIcon";
import AvatarIcon from "./icons/AvatarIcon";
import TableIcon from "./icons/TableIcon";
import LocationIcon from "./icons/LocationIcon";
import MinutesPassed from "./MinutesPassed";
import TimerIcon from "./icons/TimerIcon";
import StatusIcon from "./icons/StatusIcon";
import CardContainer from "./CardContainer";
import CardHeader from "./CardHeader";
import CardDescription from "./CardDescription";
import CardFooter from "./CardFooter";

export interface OrderCardProps {
    title: string;
    subtitle?: {
        value: string;
        type: "phone" | "id" | "customer";
    };
    tableText?: string;
    locationText?: string;
    createdAt: Date;
    orderStatus: string;
    totalPrice: number;
}

type SubtitleType = NonNullable<OrderCardProps["subtitle"]>["type"];

export default function CardOrderSheet({
    title,
    subtitle,
    tableText,
    locationText,
    createdAt,
    orderStatus,
    totalPrice,
    ...props
}: OrderCardProps & React.HTMLAttributes<HTMLDivElement>) {
    const DescriptionIconProps: SVGProps<SVGSVGElement> = {
        width: "10px",
        height: "10px",
        style: {
            marginRight: "2px",
        },
    };

    function getSubtitleIcon() {
        const icons: Record<SubtitleType, JSX.Element> = {
            phone: <CallIcon />,
            id: <ReceiptIcon />,
            customer: <AvatarIcon />,
        } as const;

        return cloneElement(icons[subtitle!.type], DescriptionIconProps);
    }

    return (
        <CardContainer {...props}>
            <div>
                <CardHeader>
                    <ReceiptIcon width={14.17} height={15.39} />
                    {title}
                </CardHeader>
                {(subtitle || tableText || locationText) && (
                    <CardDescription $mt="4px">
                        {subtitle && (
                            <div>
                                {getSubtitleIcon()}
                                {subtitle.value}
                            </div>
                        )}
                        {tableText && (
                            <div>
                                <TableIcon {...DescriptionIconProps} />
                                {tableText}
                            </div>
                        )}
                        {locationText && (
                            <div>
                                <LocationIcon {...DescriptionIconProps} />
                                {locationText}
                            </div>
                        )}
                    </CardDescription>
                )}
            </div>
            <CardFooter>
                <div>
                    <TimerIcon {...DescriptionIconProps} />
                    <MinutesPassed from={createdAt} /> min
                </div>
                <div>
                    <StatusIcon {...DescriptionIconProps} />
                    {orderStatus}
                </div>
                <div>R${totalPrice}</div>
            </CardFooter>
        </CardContainer>
    );
}

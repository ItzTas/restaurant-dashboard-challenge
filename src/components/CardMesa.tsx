import CardContainer from "./CardContainer";
import CardDescription from "./CardDescription";
import CardHeader from "./CardHeader";
import TableIcon from "./icons/TableIcon";
import ReceiptIcon from "./icons/ReceiptIcon";
import { cloneElement, JSX } from "react";
import CallIcon from "./icons/CallIcon";
import AvatarIcon from "./icons/AvatarIcon";
import LocationIcon from "./icons/LocationIcon";
import { descriptionIconProps } from "./icons/iconPresets";
import CardSummaryFooter from "./CardSummaryFooter";

export interface CardMesaProps {
    tableNumber: number;
    data?: {
        code: string;
        contact: {
            value: string;
            type: "phone" | "customer";
        };
        location: string;
        createdAt: Date;
        status: string;
        totalPrice: number;
    };
}

export default function CardMesa({
    tableNumber,
    data,
    ...props
}: CardMesaProps & React.HTMLAttributes<HTMLDivElement>) {
    const { code, contact, location, createdAt, status, totalPrice } = data ?? {};

    function getContactIcon() {
        const icons: Record<
            NonNullable<CardMesaProps["data"]>["contact"]["type"],
            JSX.Element
        > = {
            phone: <CallIcon />,
            customer: <AvatarIcon />,
        } as const;

        return cloneElement(icons[contact!.type], descriptionIconProps);
    }

    return (
        <CardContainer {...props}>
            <div>
                <CardHeader>
                    <TableIcon width={14} height={15} />
                    {tableNumber}
                </CardHeader>
                {data && (
                    <CardDescription $mt="4px">
                        <div>
                            <ReceiptIcon {...descriptionIconProps} />
                            {code}
                        </div>
                        <div>
                            {getContactIcon()}
                            {contact!.value}
                        </div>
                        <div>
                            <LocationIcon {...descriptionIconProps} />
                            {location}
                        </div>
                    </CardDescription>
                )}
            </div>
            {data && (
                <CardSummaryFooter
                    createdAt={createdAt!}
                    status={status!}
                    price={totalPrice!}
                />
            )}
        </CardContainer>
    );
}

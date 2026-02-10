import { cloneElement, JSX } from "react";
import CallIcon from "../icons/CallIcon";
import AvatarIcon from "../icons/AvatarIcon";
import ReceiptIcon from "../icons/ReceiptIcon";
import LocationIcon from "../icons/LocationIcon";
import TableIcon from "../icons/TableIcon";
import { descriptionIconProps } from "../../constants/iconPresets";
import CardContainer from "./CardContainer";
import CardHeader from "./CardHeader";
import CardDescription from "./CardDescription";
import CardSummaryFooter from "./CardSummaryFooter";

export interface CardMesaPropsData {
    code: string;
    contact: {
        value: string;
        type: "phone" | "customer";
    };
    location: string;
    lastOrderCreated: Date;
    waiter: string;
    totalPrice: number;
}

export interface CardMesaProps {
    identifier: string;
    data?: CardMesaPropsData;
}

export default function CardMesa({
    identifier,
    data,
    ...props
}: CardMesaProps & React.HTMLAttributes<HTMLDivElement>) {
    const { code, contact, location, lastOrderCreated, waiter, totalPrice } =
        data ?? {};

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
                    {identifier}
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
                    createdAt={lastOrderCreated!}
                    waiter={waiter!}
                    price={totalPrice!}
                />
            )}
        </CardContainer>
    );
}

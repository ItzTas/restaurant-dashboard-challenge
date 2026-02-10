import AvatarIcon from "../icons/AvatarIcon";
import ReceiptIcon from "../icons/ReceiptIcon";
import LocationIcon from "../icons/LocationIcon";
import TableIcon from "../icons/TableIcon";
import {
    descriptionIconProps,
    headerIconProps,
} from "../../constants/iconPresets";
import CardContainer from "./CardContainer";
import CardHeader from "./CardHeader";
import CardDescription from "./CardDescription";
import CardSummaryFooter from "./CardSummaryFooter";
import CardDescriptionRow from "./CardDescriptionRow";

export interface CardMesaPropsData {
    ordersheetsNum: number;
    customer: string;
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
}: CardMesaProps & React.ComponentProps<typeof CardContainer>) {
    const {
        customer,
        location,
        lastOrderCreated,
        ordersheetsNum,
        waiter,
        totalPrice,
    } = data ?? {};

    return (
        <CardContainer {...props}>
            <div>
                <CardHeader>
                    <TableIcon {...headerIconProps} />
                    {identifier}
                </CardHeader>
                {data && (
                    <CardDescription $mt="4px">
                        <CardDescriptionRow>
                            <ReceiptIcon {...descriptionIconProps} />
                            <span>{ordersheetsNum}</span>
                        </CardDescriptionRow>
                        <CardDescriptionRow>
                            <AvatarIcon {...descriptionIconProps} />
                            <span>{customer}</span>
                        </CardDescriptionRow>
                        <CardDescriptionRow>
                            <LocationIcon {...descriptionIconProps} />
                            <span>{location}</span>
                        </CardDescriptionRow>
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

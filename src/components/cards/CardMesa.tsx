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
import { getInitials } from "@/utils/string";
import IdBadgeIcon from "../icons/IdBadgeIcon";
import { CheckpadModel, CheckpadModelIcon } from "@/types/api.types";

export interface CardMesaCustumerData {
    value: string;
    isRealName: boolean;
}

export interface CardMesaPropsData {
    ordersheetsNum: number;
    customer: CardMesaCustumerData;
    model: {
        value: CheckpadModel;
        icon: CheckpadModelIcon;
    };
    lastOrderCreated: Date;
    waiterFullName: string;
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
        model,
        lastOrderCreated,
        ordersheetsNum,
        waiterFullName,
        totalPrice,
    } = data ?? {};

    function getCustomerIcon() {
        if (!customer) return null;
        return customer.isRealName ? (
            <AvatarIcon {...descriptionIconProps} />
        ) : (
            <IdBadgeIcon {...descriptionIconProps} />
        );
    }

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
                            {getCustomerIcon()}
                            <span>{customer!.value}</span>
                        </CardDescriptionRow>
                        <CardDescriptionRow>
                            <LocationIcon {...descriptionIconProps} />
                            <span>{model!.value}</span>
                        </CardDescriptionRow>
                    </CardDescription>
                )}
            </div>
            {data && (
                <CardSummaryFooter
                    createdAt={lastOrderCreated!}
                    waiter={getInitials(waiterFullName!)}
                    price={totalPrice!}
                />
            )}
        </CardContainer>
    );
}

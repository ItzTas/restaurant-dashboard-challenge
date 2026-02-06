import styled from "styled-components";
import ReceiptIcon from "./icons/ReceiptIcon";
import { cloneElement, JSX, SVGProps } from "react";
import CallIcon from "./icons/CallIcon";
import AvatarIcon from "./icons/AvatarIcon";
import TableIcon from "./icons/TableIcon";
import LocationIcon from "./icons/LocationIcon";
import MinutesPassed from "./MinutesPassed";

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

const Container = styled.div`
  height: 150px;
  width: 199px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 2px solid black;
  padding: 12px;
  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 32px;
  font-weight: 500;
`;

const Description = styled.div`
  text-wrap: nowrap;
  gap: 2px;
  display: flex;
  flex-direction: column;
`;

const DescriptionBox = styled.div``;

const Footer = styled.div``;

export default function CardOrderSheet({
    title,
    subtitle,
    tableText,
    locationText,
    createdAt,
    orderStatus,
    totalPrice,
}: OrderCardProps) {
    const DescriptionIconProps: SVGProps<SVGSVGElement> = {
        width: "10px",
        height: "10px",
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
        <Container>
            <div>
                <Header>
                    <ReceiptIcon width={14.17} height={15.39} />
                    {title}
                </Header>
                {subtitle && tableText && locationText && (
                    <Description>
                        {subtitle && (
                            <DescriptionBox>
                                {getSubtitleIcon()}
                                {subtitle.value}
                            </DescriptionBox>
                        )}
                        {tableText && (
                            <DescriptionBox>
                                <TableIcon {...DescriptionIconProps} />
                                {tableText}
                            </DescriptionBox>
                        )}
                        {locationText && (
                            <DescriptionBox>
                                <LocationIcon {...DescriptionIconProps} />
                                {locationText}
                            </DescriptionBox>
                        )}
                    </Description>
                )}
            </div>
            <Footer>
                <MinutesPassed />
            </Footer>
        </Container>
    );
}

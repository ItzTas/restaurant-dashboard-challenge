import styled from "styled-components";
import ReceiptIcon from "./icons/ReceiptIcon";
import React, { cloneElement, JSX, SVGProps } from "react";
import CallIcon from "./icons/CallIcon";
import AvatarIcon from "./icons/AvatarIcon";
import TableIcon from "./icons/TableIcon";
import LocationIcon from "./icons/LocationIcon";
import MinutesPassed from "./MinutesPassed";
import TimerIcon from "./icons/TimerIcon";
import StatusIcon from "./icons/StatusIcon";

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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  flex-direction: column;
  padding: 12px;
  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 32px;
  font-weight: 500;
  gap: 4px;
  margin-bottom: 4px;
`;

const Description = styled.div`
  text-wrap: nowrap;
  gap: 2px;
  display: flex;
  flex-direction: column;

  & * {
    font-size: 12px;
    line-height: 16px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: middle;

  & div {
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
  }
`;

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
        <Container {...props}>
            <div>
                <Header>
                    <ReceiptIcon width={14.17} height={15.39} />
                    {title}
                </Header>
                {(subtitle || tableText || locationText) && (
                    <Description>
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
                    </Description>
                )}
            </div>
            <Footer>
                <div>
                    <TimerIcon {...DescriptionIconProps} />
                    <MinutesPassed from={createdAt} /> min
                </div>
                <div>
                    <StatusIcon {...DescriptionIconProps} />
                    {orderStatus}
                </div>
                <div>R${totalPrice}</div>
            </Footer>
        </Container>
    );
}

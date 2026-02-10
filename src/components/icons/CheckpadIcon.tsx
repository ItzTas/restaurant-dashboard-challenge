import { CheckpadModelIcon } from "@/types/api.types";
import ApartmentIcon from "./ApartmentIcon";
import TableIcon from "./TableIcon";
import TentIcon from "./TentIcon";
import React, { SVGProps } from "react";

const icons: Record<
    CheckpadModelIcon,
    React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
    tent: TentIcon,
    apartment: ApartmentIcon,
    "table-restaurant": TableIcon,
} as const;

interface Props extends SVGProps<SVGSVGElement> {
    icon: CheckpadModelIcon;
}

export default function CheckpadIcon({ icon, ...props }: Props) {
    const Component = icons[icon];
    return <Component {...props} />;
}

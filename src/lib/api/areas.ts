import { AreaValue, OrdersheetValue } from "@/types/api.types";
import { apiUrl } from "../../constants/api";

export async function getAllAreas(): Promise<AreaValue[]> {
    const res = await fetch(`${apiUrl}/areas`);
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }
    return res.json();
}

export async function getAreaFromOrderSheetVal(ordersheetVal: OrdersheetValue) {
    if (!ordersheetVal.checkpad) {
        return null;
    }

    const checkpadModel = ordersheetVal.checkpad.model;
    const checkpadIcon = ordersheetVal.checkpad.modelIcon;

    const areas = await getAllAreas();

    const area = areas.find((area) => {
        return area.checkpadModels.some(
            (model) => model.name === checkpadModel && model.icon === checkpadIcon,
        );
    });

    if (!area) {
        return null;
    }

    return area;
}

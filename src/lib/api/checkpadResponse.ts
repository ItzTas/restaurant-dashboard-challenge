import { CheckpadsResponse, CheckpadValue } from "@/types/apiResponse.types";
import { apiUrl } from "../../constants/api";

export async function getAllCheckpads(): Promise<CheckpadsResponse> {
    const res = await fetch(`${apiUrl}/checkpadResponse`);
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }
    return res.json();
}

export async function getCheckpadsRecordByIds(
    ids: number[],
): Promise<Record<string, CheckpadValue>> {
    if (ids.length === 0) {
        return {};
    }

    const query = ids.map((id) => `id=${id}`).join("&");

    const res = await fetch(`${apiUrl}/checkpadsResponse?${query}`);

    if (!res.ok) {
        throw new Error("Failed to fetch checkpads");
    }

    const checkpadsArray: CheckpadValue[] = await res.json();

    const checkpadsObject: Record<string, CheckpadValue> = {};

    for (const checkpad of checkpadsArray) {
        checkpadsObject[checkpad.id] = checkpad;
    }

    return checkpadsObject;
}

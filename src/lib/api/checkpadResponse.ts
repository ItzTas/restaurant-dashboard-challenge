import { CheckpadsResponse, CheckpadValue } from "@/types/api";
import { apiUrl } from "../../constants/api";

export async function getAllCheckpads(): Promise<CheckpadsResponse> {
    const res = await fetch(`${apiUrl}/checkpadResponse`);
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }
    return res.json();
}

export async function getCheckpadById(
    id: string | number,
): Promise<CheckpadValue | null> {
    const checkpadResponse = await getAllCheckpads();
    for (const checkpad of Object.values(checkpadResponse.checkpads)) {
        if (checkpad.id === id) {
            return checkpad;
        }
    }
    return null;
}

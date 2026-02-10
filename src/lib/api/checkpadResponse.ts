import { CheckpadsResponse } from "@/types/api";
import { apiUrl } from "../../constants/api";

export async function getAllCheckpads(): Promise<CheckpadsResponse> {
    const res = await fetch(`${apiUrl}/checkpadResponse`);
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }
    return res.json();
}

export async function getCheckpadById(id: string | number) {
    const res = await fetch(`${apiUrl}/checkpadResponse/${id}`);
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }
    return res.json();
}

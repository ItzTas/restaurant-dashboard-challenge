import { AreaValue } from "@/types/api";
import { apiUrl } from "../../constants/api";

export async function getAllAreas(): Promise<AreaValue[]> {
    const res = await fetch(`${apiUrl}/areas`);
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }
    return res.json();
}

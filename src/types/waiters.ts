import { WaiterName } from "@/constants/waiters";

export type WaiterName = (typeof WaiterName)[keyof typeof WaiterName];

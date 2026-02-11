export const WaiterName = {
    ANA_SILVA: "Ana Silva",
    CARLOS_SANTOS: "Carlos Santos",
    MARINA_COSTA: "Marina Costa",
    PEDRO_OLIVEIRA: "Pedro Oliveira",
} as const;

export const WaiterNamesArray = Object.freeze(
    Object.values(WaiterName),
) as readonly (typeof WaiterName)[keyof typeof WaiterName][];

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getInitials(name: string): string {
    return name
        .split(" ")
        .map((part) => part[0].toUpperCase())
        .join("");
}

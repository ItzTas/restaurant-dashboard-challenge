export function getElapsedMinutes(from: Date, to: Date = new Date()): number {
    return Math.floor((to.getTime() - from.getTime()) / 60000);
}

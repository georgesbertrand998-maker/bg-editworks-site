export function billableHours(requestedHours: number): number {
  return Number.isFinite(requestedHours) && requestedHours > 0
    ? Math.max(2, requestedHours)
    : 0;
}

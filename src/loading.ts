/**
 * Loading value tells the user that this value is currently loading without any relataion
 * it if it another reload, or we have the old value someplace.
 */

export const Loading = Symbol("loading");
export type Loading = typeof Loading;

export function isLoading(value: unknown): value is Loading {
  return value === Loading;
}

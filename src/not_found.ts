/**
 * Not found symbol is usually used to mark an async value as could not be found.
 * Note that loading a single value can be found or not, but a collection is usually just empty when nothing is found.
 */

export const NotFound = Symbol("not found");
export type NotFound = typeof NotFound;

export function isNotFound(value: unknown): value is NotFound {
  return value === NotFound;
}

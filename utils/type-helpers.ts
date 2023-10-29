export const instanceOfObjectType = <T extends Record<string, string>>(
  object: Record<string, string>,
  keys: (keyof T)[],
): object is T => {
  for (const key of keys) {
    if (!(key in object)) {
      return false;
    }
  }
  return true;
};

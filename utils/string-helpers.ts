export const removeEmptyStrings = (obj: Record<string, string>) => {
  let result = {};

  for (const key in obj) {
    if (obj[key] && obj[key] !== '') {
      result = {
        ...result,
        [key]: obj[key],
      };
    }
  }

  return result;
};

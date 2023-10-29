export const removeEmptyStrings = (obj: Record<string, string | number | undefined>) => {
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

export const objectToQueryString = (obj: Record<string, string | number | undefined>) => {
  const formattedObject = removeEmptyStrings(obj);
  return Object.keys(formattedObject)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key] as string))
    .join('&');
};

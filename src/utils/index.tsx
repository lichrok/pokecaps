export const getLastPathname = () =>
  location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

export const removeHyphen = (data: string) => data.replace('-', ' ');

export const getGeneration = (data: string) => {
  const splitted = data.split('-');

  return splitted[splitted.length - 1];
};

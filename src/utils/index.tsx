export const getLastPathname = () =>
  location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

export const removeHyphen = (sentence: string) => sentence.replace('-', ' ');

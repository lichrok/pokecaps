export const getLastPathname = () =>
  location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

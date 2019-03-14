export const extractFileName = (url) => {
  return url.substring(url.lastIndexOf('/')+1);
};

export const getPathData = () => {
  const storage = globalThis?.sessionStorage;

  if (!storage) return null;

  const currentPath = storage.getItem("currentPath");
  const prevPath = storage.getItem("prevPath");
  
  return { currentPath, prevPath };
};

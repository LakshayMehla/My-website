/**
 * Utility function to get the correct asset path for both development and production
 * Handles GitHub Pages base path automatically
 */
export const getAssetPath = (path) => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production (GitHub Pages), Next.js will automatically handle the basePath
  // So we can use absolute paths starting with /
  return `/${cleanPath}`;
};

/**
 * Get asset path for images specifically
 */
export const getImagePath = (imagePath) => {
  return getAssetPath(imagePath);
};

/**
 * Utility function to get the correct asset path for both development and production
 * Handles GitHub Pages base path automatically
 */
export const getAssetPath = (path) => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Check if we're in production (GitHub Pages)
  const isProduction = process.env.NODE_ENV === 'production';
  const basePath = isProduction ? '/My-website' : '';
  
  // Return the path with the appropriate base path
  return `${basePath}/${cleanPath}`;
};

/**
 * Get asset path for images specifically
 */
export const getImagePath = (imagePath) => {
  return getAssetPath(imagePath);
};

import PropTypes from "prop-types";
import { forwardRef } from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import { RouterLink } from "src/routes/components";

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  // -------------------------------------------------------
  // Use absolute path that works with basePath configuration
  const logoSrc = typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'production' 
    ? '/My-website/logo/logo_single.svg' 
    : '/logo/logo_single.svg';
  
  const logo = (
    <Box
      component="img"
      src={logoSrc}
      sx={{ 
        height: 36, 
        width: "auto",
        cursor: "pointer", 
        ...sx 
      }}
    />
  );
  
  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: "contents" }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;

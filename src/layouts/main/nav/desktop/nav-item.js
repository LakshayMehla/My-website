import { m } from "framer-motion";
import PropTypes from "prop-types";
import { forwardRef } from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import CardActionArea from "@mui/material/CardActionArea";
import ListItemButton from "@mui/material/ListItemButton";

import { RouterLink } from "src/routes/components";

import * as gtag from "src/utils/gtag";

import Constants from "src/config/constants";
import { getPathData } from "src/config/getPathData";

import Iconify from "src/components/iconify";

// ----------------------------------------------------------------------

export const NavItem = forwardRef(
  (
    { title, path, open, event, active, hasChild, externalLink, subItem, showDot, ...other },
    ref
  ) => {
    const renderContent = (
      <StyledNavItem
        disableRipple
        disableTouchRipple
        ref={ref}
        open={open}
        active={active}
        subItem={subItem}
        showDot={showDot}
        onClick={() => TrackEvent(event, path)}
        {...other}
      >
        {title}

        {hasChild && <Iconify width={16} icon="eva:arrow-ios-downward-fill" sx={{ ml: 1 }} />}
      </StyledNavItem>
    );

    if (hasChild) {
      return renderContent;
    }

    if (externalLink) {
      return (
        <Link href={path} target="_blank" rel="noopener" color="text.secondary" underline="none">
          {renderContent}
        </Link>
      );
    }
    function TrackEvent(e, p) {
      console.log("Track Event Working");
      // const currentPath = p;
      // const prevPath = pathname;
      // console.log("currentPath", currentPath);
      // console.log("prevPath", prevPath);
      const randomNumber = localStorage.getItem("randomNumber");
      let category = "homepage";
      if (parseInt(randomNumber, 10) % 2 !== 0) {
        category = "homepagev2";
      }
      const { currentPath, prevPath } = getPathData();
      console.log("currentPath", currentPath);
      console.log("prevPath", prevPath);
      const eventName = Constants[category].for[e];
      console.log("eventName", eventName);
      gtag.event({
        eventName,
        category,
        label: prevPath,
        action: "click",
      });
    }
    return (
      <Link component={RouterLink} href={path} color="text.secondary" underline="none">
        {renderContent}
      </Link>
    );
  }
);

NavItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  event: PropTypes.string,
  open: PropTypes.bool,
  active: PropTypes.bool,
  subItem: PropTypes.bool,
  hasChild: PropTypes.bool,
  externalLink: PropTypes.bool,
  showDot: PropTypes.bool,
};

// ----------------------------------------------------------------------

const StyledNavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "subItem",
})(({ open, active, subItem, showDot, theme }) => {
  const opened = open && !active;

  const dotStyles = {
    width: 8,
    height: 8,
    left: -14,
    opacity: 0.64,
    content: '""',
    borderRadius: "50%",
    position: "absolute",
    backgroundColor: "currentColor",
    zIndex: 2,
    ...(active && {
      color: theme.palette.primary.main,
    }),
    ...(showDot && {
      color: "yellow",
    }),
  };

  const backgroundDotStyles = {
    width: 16,
    height: 16,
    left: -18,
    top: "50%",
    transform: "translateY(-50%)",
    opacity: 0.2,
    content: '""',
    borderRadius: "50%",
    position: "absolute",
    backgroundColor: "currentColor",
    zIndex: 1,
    ...(showDot && {
      color: "yellow",
    }),
  };

  return {
    // Root item
    cursor: "pointer",
    ...(!subItem && {
      ...theme.typography.body2,
      padding: 0,
      height: "100%",
      fontWeight: theme.typography.fontWeightMedium,
      transition: theme.transitions.create(["all"], {
        duration: theme.transitions.duration.shorter,
      }),
      ...(showDot && {
        "&:before": {
          ...dotStyles,
        },
        "&:after": {
          ...backgroundDotStyles,
        },
      }),
      "&:hover": {
        backgroundColor: "transparent",
      },
      ...(active && {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightSemiBold,
      }),
      ...(opened && {
        opacity: 0.64,
      }),
    }),

    // Sub item
    ...(subItem && {
      ...theme.typography.body2,
      padding: 0,
      fontSize: 13,
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightMedium,
      transition: theme.transitions.create(["all"], {
        duration: theme.transitions.duration.shorter,
      }),
      ...(showDot && {
        "&:before": {
          ...dotStyles,
        },
        "&:after": {
          ...backgroundDotStyles,
        },
      }),
      "&:hover": {
        backgroundColor: "transparent",
        color: theme.palette.text.primary,
      },
      ...(active && {
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightSemiBold,
      }),
    }),
  };
});

// ----------------------------------------------------------------------

export function NavItemDashboard({ path, sx, ...other }) {
  return (
    <Link component={RouterLink} href={path} sx={{ width: 1, height: 1 }} {...other}>
      <CardActionArea
        sx={{
          height: 1,
          minHeight: 320,
          borderRadius: 1.5,
          color: "text.disabled",
          bgcolor: "background.neutral",
          px: { md: 3, lg: 10 },
          ...sx,
        }}
      >
        <m.div
          whileTap="tap"
          whileHover="hover"
          variants={{
            hover: { scale: 1.02 },
            tap: { scale: 0.98 },
          }}
        >
          <Box
            component="img"
            alt="illustration_dashboard"
            src="assets/illustrations/illustration_dashboard.png"
          />
        </m.div>
      </CardActionArea>
    </Link>
  );
}

NavItemDashboard.propTypes = {
  path: PropTypes.string,
  sx: PropTypes.object,
};

import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";

import { useOffSetTop } from "src/hooks/use-off-set-top";
import { useResponsive } from "src/hooks/use-responsive";

import { bgBlur } from "src/theme/css";

import Logo from "src/components/logo";
import Iconify from "src/components/iconify";

import NavMobile from "./nav/mobile";
import NavDesktop from "./nav/desktop";
import { HEADER } from "../config-layout";
import { navConfig } from "./config-navigation";
import HeaderShadow from "../common/header-shadow";

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const mdUp = useResponsive("up", "md");
  const smUp = useResponsive("up", "sm");

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  const handleLinkedInClick = () => {
    window.open("https://shorturl.at/xoPOi", "_blank");
  };

  const handleGitHubClick = () => {
    // Add your GitHub URL here
    window.open("https://github.com/lakshaymehla", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:mehlalakshay@gmail.com";
  };

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          transition: theme.transitions.create(["height"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...bgBlur({
            color: theme.palette.background.default,
          }),
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
        }}
      >
        <Container sx={{ height: 1, display: "flex", alignItems: "center" }}>
          <Logo />

          {mdUp && <NavDesktop data={navConfig} />}

          <Box sx={{ flexGrow: 1 }} />

          <Stack alignItems="center" direction="row" spacing={1}>
            {/* Social Links - Desktop Only */}
            {mdUp && (
              <>
                <IconButton
                  onClick={handleLinkedInClick}
                  sx={{
                    color: "text.primary",
                    "&:hover": {
                      color: "#0077B5",
                      backgroundColor: "rgba(0, 119, 181, 0.08)",
                    },
                  }}
                >
                  <Iconify icon="mdi:linkedin" />
                </IconButton>
                <IconButton
                  onClick={handleGitHubClick}
                  sx={{
                    color: "text.primary",
                    "&:hover": {
                      color: "#333",
                      backgroundColor: "rgba(51, 51, 51, 0.08)",
                    },
                  }}
                >
                  <Iconify icon="mdi:github" />
                </IconButton>
                <IconButton
                  onClick={handleEmailClick}
                  sx={{
                    color: "text.primary",
                    "&:hover": {
                      color: "#D44638",
                      backgroundColor: "rgba(212, 70, 56, 0.08)",
                    },
                  }}
                >
                  <Iconify icon="mdi:email-outline" />
                </IconButton>
              </>
            )}

            {/* Mobile Navigation */}
            {!mdUp && <NavMobile data={navConfig} />}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}

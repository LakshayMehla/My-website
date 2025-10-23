/* eslint-disable perfectionist/sort-imports */
import "src/global.css";
import { Box, Grid, Link, Stack, Divider, Container, Typography, IconButton } from "@mui/material";
import React from "react";
import { RouterLink } from "src/routes/components";
import { pxToRem, responsiveFontSizes } from "src/theme/typography";
import { getPathData } from "src/config/getPathData";
import Constants from "src/config/constants";
import * as gtag from "src/utils/gtag";
import Iconify from "src/components/iconify";

const LINKS = [
  {
    headline: "Quick Links",
    children: [
      { name: "About", href: "#about", event: "about" },
      { name: "Projects", href: "#projects", event: "projects" },
      { name: "Skills", href: "#skills", event: "skills" },
      { name: "Contact", href: "#contact", event: "contact" },
    ],
  },
  {
    headline: "Contact",
    children: [
      { name: "mehlalakshay@gmail.com", href: "mailto:mehlalakshay@gmail.com", event: "email" },
      { name: "+91 8053538873", href: "tel:+918053538873", event: "phone" },
      { name: "LinkedIn", href: "https://shorturl.at/xoPOi", event: "linkedin" },
    ],
  },
];

const socialLinks = [
  { icon: "mdi:linkedin", href: "https://shorturl.at/xoPOi", event: "linkedin", color: "#0077B5" },
  { icon: "mdi:github", href: "https://github.com/lakshaymehla", event: "github", color: "#333" },
  { icon: "mdi:email", href: "mailto:mehlalakshay@gmail.com", event: "email", color: "#D44638" },
];

export default function footer() {
  const onClick = (e) => {
    console.log("Footer clicking");
    console.log("Track Event Working");
    const randomNumber = localStorage.getItem("randomNumber");
    let category = "homepage";
    if (parseInt(randomNumber, 10) % 2 !== 0) {
      category = "homepagev2";
    }
    const { prevPath } = getPathData();
    // const { currentPath, prevPath } = getPathData();
    const eventName = Constants[category].footer[e];
    console.log("eventName", eventName);
    gtag.event({
      eventName,
      category,
      label: prevPath,
      action: "click",
    });
  };
  return (
    <Container
      sx={{
        pt: 5,
        pb: { xs: 5, sm: 10, lg: 15 },
        textAlign: { xs: "center" },
      }}
    >
      <Stack sx={{ gap: { xs: 3, md: 4 } }}>
        <Divider />
        <Typography
          variant="caption"
          sx={{
            fontFamily: "Denton",
            fontWeight: 700,
            lineHeight: 1.2,
            textAlign: "center",
            background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: pxToRem(24),
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Building innovative solutions with modern web technologies{" "}
        </Typography>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Stack spacing={5} direction="row" justifyContent="space-between">
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2} alignItems="flex-start">
                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="text.secondary"
                      variant="body1"
                      onClick={() => onClick(link.event)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Stack sx={{ mt: { xs: 5, md: 0 } }} alignItems={{ xs: "flex-start", lg: "center" }}>
              <Stack alignItems="flex-start" spacing={2}>
                <Typography color="text.secondary" variant="body1">
                  Social links
                </Typography>
                <Stack direction="row" spacing={1}>
                  {socialLinks.map((link) => (
                    <IconButton
                      key={link.event}
                      component="a"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => onClick(link.event)}
                      sx={{
                        color: link.color,
                        "&:hover": {
                          backgroundColor: `${link.color}15`,
                          transform: "scale(1.1)",
                        },
                        transition: "all 0.2s ease",
                      }}
                    >
                      <Iconify icon={link.icon} width={24} />
                    </IconButton>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack sx={{ mt: { xs: 5, md: 0 } }} alignItems={{ xs: "flex-start", lg: "center" }}>
              <Stack alignItems="flex-start" spacing={2}>
                <Typography color="text.secondary" variant="body1">
                  Technologies I Work With
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {[
                    "React/Next.js",
                    "Node.js/Express", 
                    "MongoDB/PostgreSQL",
                    "Material UI",
                    "TypeScript"
                  ].map((tech, index) => (
                    <Box
                      key={index}
                      sx={{
                        px: { xs: 1.5, sm: 2 },
                        py: { xs: 0.5, sm: 1 },
                        background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
                        color: "white",
                        borderRadius: 2,
                        fontSize: { xs: "0.7rem", sm: "0.8rem" },
                        fontWeight: 600,
                        boxShadow: "0 2px 8px rgba(102, 126, 234, 0.3)",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
                        },
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Divider />
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          sx={{ mt: 2 }}
        >
        Built with Next.js, and Material UI.
        </Typography>
       
      </Stack>
    </Container>
  );
}

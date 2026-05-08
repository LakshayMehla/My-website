import React, { useState } from "react";

import { Box, Stack, Button, Container, Typography } from "@mui/material";

import * as gtag from "src/utils/gtag";

import Constants from "src/config/constants";
import { getPathData } from "src/config/getPathData";
import { pxToRem, responsiveFontSizes } from "src/theme/typography";

const Home2SeoContent = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  const handleClick = (name) => {
    // Send a click event to Google Analytics
    const { prevPath } = getPathData();
    const event = Constants.homepage.buttons[name];
    gtag.event({
      eventName: event,
      category: "homepage",
      label: prevPath,
      action: "click",
    });
  };
  return (
    <Box 
      sx={{ 
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 10% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
          zIndex: 1,
        },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Stack py={12}>
          <Stack sx={{ color: "text.secondary" }} spacing={6}>
            <Typography
              variant={{ xs: "h3", md: "h2" }}
              sx={{
                fontFamily: "Denton",
                fontWeight: 700,
                lineHeight: 1.2,
                textAlign: "center",
                background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: pxToRem(45),
                ...responsiveFontSizes({ sm: 40, md: 50, lg: 55 }),
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
              id="about"
            >
              About Me
            </Typography>
            <Stack
              direction="row"
              spacing={{ xs: 4, md: 8 }}
              justifyContent="center"
              sx={{ mt: 4 }}
            >
              <Box
                sx={{
                  width: {
                    xs: 140,
                    md: 180,
                    lg: 220,
                  },
                  height: {
                    xs: 140,
                    md: 180,
                    lg: 220,
                  },
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: {
                    xs: "3.5rem",
                    md: "4.5rem",
                    lg: "5.5rem",
                  },
                  fontWeight: "bold",
                  boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)",
                  border: "4px solid rgba(255,255,255,0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 25px 50px rgba(102, 126, 234, 0.4)",
                  },
                }}
              >
                LM
              </Box>
            </Stack>

            <Typography sx={{ textAlign: "center" }} variant="body1" mb={-2}>
              Full Stack Developer (SDE-2) with 3 years of experience building and scaling B2B & B2C travel platforms{" "}
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              I'm a{" "}
              <Box component="span" fontWeight="bold">
                Full Stack Developer (SDE-2)
              </Box>
              {" "}with 3 years of experience building and scaling B2B and B2C travel platforms using React/Next.js, Node.js/Express, and MongoDB. Promoted from SDE-1 → SDE-2 at Flyzy based on delivery, reliability, and code quality. I've led front-end architecture for Flyzy (corporate dashboards), DirectOne (agent management), and TryVisa (visa automation), achieving measurable gains in performance, workflow automation, and payment integration. Currently pursuing an MBA in Business Analytics to deepen expertise in product strategy and data-driven decision-making.
              {!showMore && (
                <Button
                  onClick={handleToggle}
                  color="primary"
                  size="small"
                  sx={{ width: "max-content" }}
                  ml={-1}
                >
                  {showMore ? "Show Less" : "Read More"}
                </Button>
              )}
            </Typography>
            <Stack
              sx={{
                display: showMore ? "block" : "none",
                ...(!showMore && {
                  height: 0,
                  overflow: "hidden",
                }),
              }}
            >
              <Typography variant="body2">
                <strong>Current Role – SDE-2, Full Stack Developer @ Flyzy (Apr 2025 – Present):</strong><br/>
                Primary frontend owner and full stack contributor for the Flyzy Corporate Dashboard (B2B travel platform) handling flights, hotels, and packages using React/Next.js and Material UI.
                Engineered a hierarchical team management module with real-time booking analytics and a dynamic travel policy engine — allowing corporate admins to set automated booking limits, manage compliance, and process limit-increase requests via multi-level approval workflows.
                Optimized MongoDB queries, migrated asset storage to Cloudflare R2, and integrated direct Razorpay checkout with idempotent payment handling, reducing transaction failures and accelerating load times.
              </Typography>
              <Box component="img" src="assets/illustrations/plane-divider.svg" width={1} my={2} />
              <Typography variant="body2">
                <strong>Key Achievements & Experience:</strong>
                <Box component="ul">
                  <Box component="li">
                    <strong>SDE-1 (Apr 2023 – Mar 2025):</strong> Led end-to-end frontend for DirectOne (B2B agent portal) — search, booking, whitelabeling & branded ticket generation, and dynamic markup/margin engine
                  </Box>
                  <Box component="li">
                    <strong>TryVisa (B2C):</strong> Architected and developed a consumer-facing visa application platform from scratch, reducing checkout time from ~3 minutes to under 1 minute
                  </Box>
                  <Box component="li">
                    <strong>Workflow Automation:</strong> Built critical ops workflows and alert systems using n8n and Make.com, cutting manual support intervention by ~80%
                  </Box>
                  <Box component="li">
                    <strong>Internal Tooling:</strong> Developed Retool dashboards to monitor system health, user behavior, and bookings, significantly improving incident response times
                  </Box>
                  <Box component="li">
                    <strong>Payment Integration:</strong> Integrated Razorpay and PhonePe with idempotent payment handling to reduce transaction failures
                  </Box>
                  <Box component="li">
                    <strong>Monitoring:</strong> Implemented comprehensive observability with Grafana, Prometheus, Loki, Google Analytics, and OpenReplay
                  </Box>
                  <Box component="li">
                    <strong>Cloud & Infrastructure:</strong> Firebase Hosting/Functions/Scheduler, Cloudflare R2/CDN, GitHub Actions
                  </Box>
                  <Box component="li">
                    <strong>Education:</strong> Currently pursuing MBA in Business Analytics from Chandigarh University (Online); B.Tech from SJPMIIT (2018–2022)
                  </Box>
                </Box>
              </Typography>
              <Typography variant="body2">
                I'm passionate about building scalable platforms that solve real-world problems in the travel industry.
                My experience spans the entire development lifecycle — from initial concept to production deployment — with a strong focus
                on performance, reliability, and user experience.
                <Button
                  onClick={handleToggle}
                  color="warning"
                  size="small"
                  sx={{ width: "max-content" }}
                  ml={-1}
                >
                  {showMore ? "Show Less" : "Read More"}
                </Button>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home2SeoContent;

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
              Lead Full Stack Developer with 2.5+ years delivering B2B travel platforms{" "}
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              I'm a{" "}
              <Box component="span" fontWeight="bold">
                Lead Full Stack Developer
              </Box>
              {" "}with 2.5+ years of experience delivering B2B travel platforms end-to-end across React/Next.js, Node.js/Express, and MongoDB/PostgreSQL. Promoted from SDE-1 → SDE-2 → Lead based on delivery, reliability, and code quality. I've built and owned the frontend for Flyzy (flight/hotel/package/cab), DirectOne (agent platform), and TryVisa (visa) dashboards, improving performance, payments, automation, and observability.
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
                <strong>Current Role - Lead Full Stack Developer (Apr 2025 – Present):</strong><br/>
                Sole frontend owner for Flyzy dashboards across flights, hotels, packages, and cabs using React/Next.js and Material UI. 
                Implemented Google Analytics and OpenReplay session replay to diagnose UX issues and improve funnels. Built direct checkout 
                integrated with Razorpay, reducing payment processing time by ~60%. Optimized MongoDB queries and adopted Cloudflare R2 for 
                image storage, improving page load times by ~35% on booking flows.
              </Typography>
              <Box component="img" src="assets/illustrations/plane-divider.svg" width={1} my={2} />
              <Typography variant="body2">
                <strong>Key Achievements & Experience:</strong>
                <Box component="ul">
                  <Box component="li">
                    <strong>SDE-2 (Jan 2024 – Mar 2025):</strong> Sole frontend developer for DirectOne agent platform with search, booking, ticketing, and account management
                  </Box>
                  <Box component="li">
                    <strong>SDE-1 (Apr 2023 – Dec 2023):</strong> Built first version of Flyzy's booking/pricing platform and dashboards as sole frontend developer
                  </Box>
                  <Box component="li">
                    <strong>Product Ownership:</strong> Independently built complete frontends for flight, hotel, and package booking systems
                  </Box>
                  <Box component="li">
                    <strong>Performance Optimization:</strong> Reduced checkout time from ~3 minutes to under 1 minute for TryVisa application
                  </Box>
                  <Box component="li">
                    <strong>Automation:</strong> Automated workflows and alerts with n8n and Make.com, cutting manual operational effort by ~80%
                  </Box>
                  <Box component="li">
                    <strong>Monitoring:</strong> Implemented comprehensive monitoring with Grafana, Prometheus, and Loki for system observability
                  </Box>
                  <Box component="li">
                    <strong>Payment Integration:</strong> Built robust payment systems with Razorpay and PhonePe integration
                  </Box>
                  <Box component="li">
                    <strong>Cloud Infrastructure:</strong> Experience with Vercel, Netlify, Cloudflare R2/CDN, and GitHub Actions
                  </Box>
                  <Box component="li">
                    <strong>Database Expertise:</strong> MongoDB, PostgreSQL, Redis, MySQL, and SQLite
                  </Box>
                  <Box component="li">
                    <strong>Education:</strong> Currently pursuing MBA in Business Analytics from Chandigarh University (Online)
                  </Box>
                </Box>
              </Typography>
              <Typography variant="body2">
                I'm passionate about building scalable B2B platforms that solve real-world problems in the travel industry. 
                My experience spans the entire development lifecycle, from initial concept to production deployment, with a focus 
                on performance, reliability, and user experience. I'm always excited to take on new challenges and contribute 
                to innovative solutions that drive business growth.
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

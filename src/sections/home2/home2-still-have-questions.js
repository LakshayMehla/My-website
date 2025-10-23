import { Box, Stack, Button, Container, Typography } from "@mui/material";

import { paths } from "src/routes/paths";
import { RouterLink } from "src/routes/components";

import * as gtag from "src/utils/gtag";

import Constants from "src/config/constants";
import { getPathData } from "src/config/getPathData";
import { pxToRem, responsiveFontSizes } from "src/theme/typography";

import Iconify from "src/components/iconify";

export default function Home2StillHaveQuestions() {
  const handleEmailClick = () => {
    window.location.href = "mailto:mehlalakshay@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://shorturl.at/xoPOi", "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+918053538873";
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
          background: "radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
          zIndex: 1,
        },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Stack alignItems="center" spacing={6} sx={{ py: 12 }} id="contact">
          <Stack spacing={2}>
            <Typography
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
            >
              Let's Work Together
            </Typography>
            <Typography 
              textAlign="center" 
              color="text.secondary" 
              sx={{
                fontSize: pxToRem(20),
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </Typography>
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems="center">
            <Button
              size="large"
              sx={{
                minWidth: 180,
                height: 56,
                background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
                color: "white",
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(45deg, #5a6fd8 30%, #6a4190 90%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
                },
              }}
              variant="contained"
              startIcon={<Iconify icon="mdi:email-outline" />}
              onClick={handleEmailClick}
            >
              Send Email
            </Button>
            <Button
              size="large"
              sx={{
                minWidth: 180,
                height: 56,
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(102, 126, 234, 0.3)",
                color: "primary.main",
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(102, 126, 234, 0.1)",
                  border: "2px solid rgba(102, 126, 234, 0.5)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(102, 126, 234, 0.2)",
                },
              }}
              variant="outlined"
              startIcon={<Iconify icon="mdi:phone" />}
              onClick={handlePhoneClick}
            >
              +91 8053538873
            </Button>
            <Button
              size="large"
              sx={{
                minWidth: 180,
                height: 56,
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(102, 126, 234, 0.3)",
                color: "primary.main",
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(102, 126, 234, 0.1)",
                  border: "2px solid rgba(102, 126, 234, 0.5)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(102, 126, 234, 0.2)",
                },
              }}
              variant="outlined"
              startIcon={<Iconify icon="mdi:linkedin" />}
              onClick={handleLinkedInClick}
            >
              LinkedIn
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

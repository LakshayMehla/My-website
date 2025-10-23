import { Cursor, useTypewriter } from "react-simple-typewriter";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { useResponsive } from "src/hooks/use-responsive";

import Iconify from "src/components/iconify";

import LottieAnimation from "./lottie";

// ----------------------------------------------------------------------

export default function Home2Hero() {
  const [typeEffect] = useTypewriter({
    words: ["Full Stack Developer", "React/Next.js Expert", "Node.js Specialist", "B2B Platform Builder"],
    loop: {},
    typeSpeed: 140,
    deleteSpeed: 60,
  });

  const smDown = useResponsive("down", "sm");

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsClick = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
          zIndex: 1,
        },
      }}
    >
      <Container
        sx={{ 
          position: "relative", 
          zIndex: 2,
          pt: { xs: 16, sm: 10 },
        }}
      >
        {/* <Box
          sx={{
            position: "absolute",
            top: { xs: "24vw", sm: "10%", md: "8%" },
            left: { xs: "-25%", sm: 0 },
            width: { xs: "150%", sm: "100%" },
            opacity: 0.1,
            zIndex: 1,
          }}
        >
          <LottieAnimation />
        </Box> */}
        <Stack
          alignItems="center"
          spacing={8}
          sx={{
            pt: { xs: 10, md: 20 },
            pb: { xs: 10, md: 10 },
            overflow: "hidden",
            position: "relative",
            zIndex: 3,
          }}
        >
          <Stack textAlign="center" spacing={2}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Denton",
                background: "linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 4px 8px rgba(0,0,0,0.1)",
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Hi, I'm Lakshay Mehla
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Denton",
                background: "linear-gradient(45deg, #ff6b6b 30%, #4ecdc4 90%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 600,
                lineHeight: 1.3,
                minHeight: { xs: "3rem", sm: "4rem", md: "5rem" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Box component="span">{typeEffect}</Box>
              <Box component="span" sx={{ color: "rgba(255,255,255)" }}>
                <Cursor />
              </Box>
            </Typography>
          </Stack>
          
          <Typography
            textAlign="center"
            sx={{ 
              maxWidth: { sm: "auto", md: 840 },
              fontSize: { xs: 16, sm: 20, md: 22 },
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.6,
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Full Stack Developer with 2.5+ years delivering B2B travel platforms end-to-end. 
            Built and owned frontend for Flyzy, DirectOne, and TryVisa dashboards, improving performance, 
            payments, automation, and observability.
          </Typography>

          <Stack
            direction={{ sm: "row" }}
            spacing={3}
            px={2}
            alignItems={{ xs: "center", sm: "flex-start" }}
            justifyContent="center"
            gap={2}
          >
            <Button
              sx={{
                width: { xs: "100%", sm: "max-content" },
                minWidth: 180,
                height: 56,
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(255,255,255,0.2)",
                color: "white",
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(255,255,255,0.2)",
                  border: "2px solid rgba(255,255,255,0.4)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                },
              }}
              variant="outlined"
              size="large"
              endIcon={<Iconify icon="mingcute:arrow-right-line" />}
              onClick={handleProjectsClick}
            >
              View My Work
            </Button>
            <Button
              startIcon={<Iconify icon="mdi:email-outline" />}
              sx={{ 
                width: { xs: "100%", sm: "max-content" },
                minWidth: 180,
                height: 56,
                background: "linear-gradient(45deg, #ff6b6b 30%, #4ecdc4 90%)",
                color: "white",
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(45deg, #ff5252 30%, #26a69a 90%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                },
              }}
              variant="contained"
              size="large"
              onClick={handleContactClick}
            >
              Get In Touch
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

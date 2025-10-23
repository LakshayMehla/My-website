import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { useResponsive } from "src/hooks/use-responsive";

import { pxToRem, responsiveFontSizes } from "src/theme/typography";

// ----------------------------------------------------------------------

const PROJECTS = [
  {
    title: "Flyzy Agent Platform",
    description: "Agent platform with search, booking, ticketing, and account management. Built role-based dashboards and whitelabel customization",
    image: "/assets/images/projects/agent-platform.svg",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Material UI"],
    achievements: "Implemented whitelabeling features and Excel exports for partner agencies",
    link: "/projects/flyzy"
  },
  {
    title: "DirectOne Travel Platform",
    description: "B2B travel platform with flight, hotel, package, and cab booking systems. Sole frontend owner with React/Next.js and Material UI",
    image: "/assets/images/projects/travel-platform.svg",
    technologies: ["React", "Next.js", "Material UI", "Razorpay", "MongoDB"],
    achievements: "Reduced payment processing time by ~60%, improved page load times by ~35%",
    link: "/projects/directone"
  },
  {
    title: "TryVisa Application",
    description: "Visa application platform with streamlined checkout process. Sole developer who rebuilt entire application experience",
    image: "/assets/images/projects/visa-application.svg",
    technologies: ["React", "Node.js", "MongoDB", "Vercel", "Cloudflare"],
    achievements: "Reduced checkout time from ~3 minutes to under 1 minute",
    link: "/projects/tryvisa"
  },
];

export default function Home2Features() {
  const lgUp = useResponsive("up", "lg");
  const mdDown = useResponsive("down", "md");

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.05) 0%, transparent 50%)",
          zIndex: 1,
        },
      }}
    >
      <Container sx={{ py: { xs: 12 }, position: "relative", zIndex: 2 }}>
        <Stack spacing={10}>
          <Stack spacing={2} id="projects">
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
              Featured Projects
            </Typography>
            <Typography
              textAlign="center"
              color="text.secondary"
              sx={{ 
                fontWeight: 400, 
                fontSize: pxToRem(22),
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              A showcase of my recent work and technical expertise in building scalable B2B platforms.
            </Typography>
          </Stack>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {PROJECTS.map((project, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              lg={4}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                href={project.link}
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                  maxWidth: 400,
                }}
              >
                <Box
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  p: { xs: 3, sm: 4 },
                  borderRadius: 4,
                  background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  border: "1px solid rgba(102, 126, 234, 0.1)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease-in-out",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
                  },
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(102, 126, 234, 0.15)",
                    border: "1px solid rgba(102, 126, 234, 0.2)",
                  }
                }}
              >
                {/* Image Container */}
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 120, sm: 140, md: 160 },
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    borderRadius: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "contain",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      }
                    }}
                  />
                </Box>

                {/* Content Container */}
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 2, 
                      fontWeight: 600,
                      fontSize: { xs: "1.1rem", sm: "1.2rem" },
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ 
                      mb: 2,
                      fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      lineHeight: 1.5,
                      flex: 1,
                    }}
                  >
                    {project.description}
                  </Typography>
                  
                  {project.achievements && (
                    <Typography 
                      variant="body2" 
                      color="primary.main" 
                      sx={{ 
                        mb: 3, 
                        fontStyle: "italic", 
                        fontSize: { xs: "0.8rem", sm: "0.85rem" },
                        lineHeight: 1.4,
                      }}
                    >
                      <strong>Key Achievement:</strong> {project.achievements}
                    </Typography>
                  )}
                </Box>

                {/* Technology Tags */}
                <Stack 
                  direction="row" 
                  spacing={1} 
                  justifyContent="center" 
                  flexWrap="wrap" 
                  useFlexGap
                  sx={{ mt: "auto" }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <Box
                      key={techIndex}
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
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

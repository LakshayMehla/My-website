import { m } from "framer-motion";

import { Grid, Box, Chip } from "@mui/material";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { pxToRem, responsiveFontSizes } from "src/theme/typography";

import { varFade, MotionViewport } from "src/components/animate";

// ----------------------------------------------------------------------

const SKILLS = [
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Express.js", "Material UI", "Tailwind CSS"],
    color: "#61DAFB"
  },
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
    color: "#68A063"
  },
  {
    category: "Databases & Caching",
    skills: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "SQLite"],
    color: "#336791"
  },
  {
    category: "Cloud & Services",
    skills: ["Vercel", "Netlify", "Cloudflare R2/CDN", "GitHub Actions"],
    color: "#FF9900"
  },
  {
    category: "Monitoring & Analytics",
    skills: ["Grafana", "Prometheus", "Loki", "Google Analytics", "OpenReplay"],
    color: "#00D4AA"
  },
  {
    category: "Tools & Platforms",
    skills: ["Retool", "n8n", "Make.com", "Postman", "Docker", "Git", "Figma", "VS Code", "Cursor"],
    color: "#8B5CF6"
  }
];

export default function Home2Team() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)",
          zIndex: 1,
        },
      }}
    >
      <Container component={MotionViewport} sx={{ pt: { xs: 12, md: 18 }, pb: { xs: 12, md: 18 }, position: "relative", zIndex: 2 }}>
        <m.div variants={varFade().inUp}>
          <Typography
            sx={{
              fontFamily: "Denton",
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.2,
              mb: 8,
              color: "white",
              fontSize: pxToRem(45),
              ...responsiveFontSizes({ sm: 40, md: 50, lg: 55 }),
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
            id="skills"
          >
            Technical Skills & Technologies
          </Typography>
        </m.div>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {SKILLS.map((skillCategory, index) => (
            <Grid 
              item 
              xs={12} 
              md={6} 
              lg={4} 
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <m.div variants={varFade().inUp} style={{ width: "100%", maxWidth: 400 }}>
                <Box
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 4,
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    height: "100%",
                    minHeight: 280,
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.15)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      transform: "translateY(-4px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 3,
                      fontWeight: 700,
                      color: "white",
                      textAlign: "center",
                      fontSize: { xs: "1.1rem", md: "1.2rem" },
                      textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      lineHeight: 1.3,
                    }}
                  >
                    {skillCategory.category}
                  </Typography>
                  
                  <Stack 
                    direction="row" 
                    spacing={1} 
                    flexWrap="wrap" 
                    useFlexGap
                    sx={{ 
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      gap: 1,
                    }}
                  >
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        size="small"
                        sx={{
                          background: "rgba(255, 255, 255, 0.2)",
                          color: "white",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          fontWeight: 600,
                          fontSize: { xs: "0.75rem", md: "0.8rem" },
                          height: { xs: 28, md: 32 },
                          transition: "all 0.2s ease",
                          "&:hover": {
                            background: "rgba(255, 255, 255, 0.3)",
                            transform: "scale(1.05)",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

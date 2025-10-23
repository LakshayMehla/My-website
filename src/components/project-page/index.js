'use client';

import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';

import { pxToRem, responsiveFontSizes } from 'src/theme/typography';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ProjectPage({ 
  title, 
  description, 
  longDescription, 
  technologies, 
  achievements, 
  screenshots = [], 
  liveUrl, 
  githubUrl 
}) {
  // Update page title dynamically
  useEffect(() => {
    document.title = `${title} | Lakshay Mehla Portfolio`;
  }, [title]);

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        position: "relative",
        minHeight: "100vh",
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
      <Container sx={{ position: "relative", zIndex: 2, py: 8 }}>
        {/* Header */}
        <Stack spacing={4} sx={{ mb: 8 }}>
          <Typography
            variant="h1"
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
            {title}
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              maxWidth: 800,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>

          {/* Action Buttons */}
          <Stack 
            direction={{ xs: "column", sm: "row" }} 
            spacing={2} 
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            {liveUrl && (
              <Button
                variant="contained"
                size="large"
                startIcon={<Iconify icon="mdi:open-in-new" />}
                href={liveUrl}
                target="_blank"
                sx={{
                  background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
                  color: "white",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  borderRadius: 3,
                  px: 4,
                  py: 1.5,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "linear-gradient(45deg, #5a6fd8 30%, #6a4190 90%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
                  },
                }}
              >
                View Live Project
              </Button>
            )}
          </Stack>
        </Stack>

        {/* Project Details */}
        <Grid container spacing={6}>
          {/* Left Column - Description & Technologies */}
          <Grid item xs={12} lg={6}>
            <Stack spacing={4}>
              {/* Long Description */}
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  border: "1px solid rgba(102, 126, 234, 0.1)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: "text.primary",
                  }}
                >
                  About This Project
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.7,
                    color: "text.secondary",
                  }}
                >
                  {longDescription}
                </Typography>
              </Box>

              {/* Technologies */}
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  border: "1px solid rgba(102, 126, 234, 0.1)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: "text.primary",
                  }}
                >
                  Technologies Used
                </Typography>
                <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                  {technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      sx={{
                        background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
                        color: "white",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        height: 36,
                        transition: "all 0.2s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
                        },
                      }}
                    />
                  ))}
                </Stack>
              </Box>

              {/* Key Achievements */}
              {achievements && (
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                    border: "1px solid rgba(102, 126, 234, 0.1)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 3,
                      fontWeight: 600,
                      color: "text.primary",
                    }}
                  >
                    Key Achievements
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.7,
                      color: "text.secondary",
                      fontStyle: "italic",
                    }}
                  >
                    {achievements}
                  </Typography>
                </Box>
              )}
            </Stack>
          </Grid>

          {/* Right Column - Screenshots */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                p: 4,
                borderRadius: 4,
                background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                border: "1px solid rgba(102, 126, 234, 0.1)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: "text.primary",
                }}
              >
                Project Screenshots
              </Typography>
              
              {screenshots.length > 0 ? (
                <Stack spacing={3}>
                  {screenshots.map((screenshot, index) => (
                    <Box
                      key={index}
                      sx={{
                        borderRadius: 2,
                        overflow: "hidden",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 12px 35px rgba(0,0,0,0.2)",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={screenshot}
                        alt={`${title} screenshot ${index + 1}`}
                        sx={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              ) : (
                <Box
                  sx={{
                    p: 6,
                    textAlign: "center",
                    borderRadius: 2,
                    background: "rgba(102, 126, 234, 0.05)",
                    border: "2px dashed rgba(102, 126, 234, 0.2)",
                  }}
                >
                  <Iconify 
                    icon="mdi:image-outline" 
                    sx={{ 
                      fontSize: 48, 
                      color: "text.disabled",
                      mb: 2 
                    }} 
                  />
                  <Typography variant="body1" color="text.secondary">
                    Screenshots will be added here
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ProjectPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  longDescription: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
  achievements: PropTypes.string,
  screenshots: PropTypes.array,
  liveUrl: PropTypes.string,
  githubUrl: PropTypes.string,
};

'use client';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';

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
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);

  // Update page title dynamically
  useEffect(() => {
    document.title = `${title} | Lakshay Mehla Portfolio`;
  }, [title]);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

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

        {/* Project Screenshots - Top Section */}
        {screenshots.length > 0 && (
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                fontWeight: 600,
                textAlign: "center",
                color: "text.primary",
              }}
            >
              Project Screenshots
            </Typography>
            <Grid container spacing={3}>
              {screenshots.map((screenshot, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    onClick={() => handleImageClick(screenshot)}
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
                        "& img": {
                          transform: "scale(1.1)",
                        },
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
                        objectFit: "contain",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Project Details */}
        <Grid container spacing={6}>
          <Grid item xs={12}>
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
        </Grid>
      </Container>

      {/* Image Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            borderRadius: 2,
            maxHeight: '90vh',
          },
        }}
      >
        <DialogContent
          sx={{
            p: 0,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(10px)',
              zIndex: 1,
              width: 48,
              height: 48,
              border: '2px solid rgba(255, 255, 255, 0.3)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                border: '2px solid rgba(255, 255, 255, 0.6)',
                transform: 'scale(1.1)',
              },
            }}
          >
            <Iconify icon="mdi:close" sx={{ fontSize: 24 }} />
          </IconButton>
          
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt="Full size screenshot"
              sx={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: 1,
              }}
            />
          )}
        </DialogContent>
      </Dialog>
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

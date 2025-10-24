import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { Box, Stack, Button, Divider } from "@mui/material";

import { usePathname } from "next/navigation";

import { HEADER } from "src/layouts/config-layout";

import Logo from "src/components/logo";
import Iconify from "src/components/iconify";
import SvgColor from "src/components/svg-color";
import Scrollbar from "src/components/scrollbar";
import NavList from "./nav-list";

// ----------------------------------------------------------------------

export default function NavMobile({ data }) {
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(false);

  console.log('NavMobile rendered with data:', data);

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    setOpenMenu(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  const handleResumeDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume.pdf file to the public folder
    link.download = 'Lakshay_Mehla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleCloseMenu(); // Close the mobile menu after download
  };

  return (
    <>
      <IconButton onClick={handleOpenMenu} sx={{ ml: 1 }}>
        <SvgColor src="assets/icons/navbar/ic_menu_item.svg" />
      </IconButton>

      <Drawer
        open={openMenu}
        onClose={handleCloseMenu}
        PaperProps={{
          sx: {
            pb: 5,
            width: "100vw",
          },
        }}
      >
        <Scrollbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ px: 2, height: HEADER.H_MOBILE }}
          >
            <Logo />

            <IconButton size="large" onClick={handleCloseMenu} sx={{ height: "max-content" }}>
              <Iconify icon="material-symbols:close" />
            </IconButton>
          </Stack>

          {data.map((list) => (
            <NavList key={list.title} data={list} onClose={handleCloseMenu} />
          ))}

          {/* Download Resume Button - Mobile */}
          <Box sx={{ px: 2, py: 2 }}>
            <Divider sx={{ mb: 2 }} />
            <Button
              variant="contained"
              fullWidth
              onClick={handleResumeDownload}
              startIcon={<Iconify icon="mdi:download" />}
              sx={{
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: 2,
                },
              }}
            >
              Download Resume
            </Button>
          </Box>
        </Scrollbar>
      </Drawer>
    </>
  );
}

NavMobile.propTypes = {
  data: PropTypes.array,
};

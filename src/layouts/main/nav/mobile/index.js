import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { Box, Stack, Button } from "@mui/material";

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

  return (
    <>
      <IconButton onClick={handleOpenMenu} sx={{ ml: 1 }}>
        <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
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
            <NavList key={list.title} data={list} />
          ))}
        </Scrollbar>
      </Drawer>
    </>
  );
}

NavMobile.propTypes = {
  data: PropTypes.array,
};

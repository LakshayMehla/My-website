import { paths } from "src/routes/paths";

import Iconify from "src/components/iconify";

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: "About",
    icon: <Iconify icon="mdi:account-circle-outline" />,
    path: "#about",
    event: "about",
  },
  {
    title: "Projects",
    icon: <Iconify icon="mdi:folder-multiple-outline" />,
    path: "#projects",
    event: "projects",
  },
  {
    title: "Skills",
    icon: <Iconify icon="mdi:code-tags" />,
    path: "#skills",
    event: "skills",
  },
  {
    title: "Contact",
    icon: <Iconify icon="mdi:email-outline" />,
    path: "#contact",
    event: "contact",
  },
];

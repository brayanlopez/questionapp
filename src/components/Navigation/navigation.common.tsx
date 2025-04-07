import React from "react";

import CalculateIcon from "@mui/icons-material/Calculate";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HomeIcon from "@mui/icons-material/Home";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

import { INfORMATION_ROUTE, TOPIC_ROUTES } from "../../utils/routes";

// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';

// import SettingsIcon from '@mui/icons-material/Settings';

import HelpCenterIcon from "@mui/icons-material/HelpCenter";

export const menuItems = [
  { name: "Inicio", icon: <HomeIcon />, path: "/" },
  { name: "Matemáticas", icon: <CalculateIcon />, path: TOPIC_ROUTES.MATH },
  { name: "Preguntas UNAL", icon: <EditNoteIcon />, path: TOPIC_ROUTES.UNAL },
  { name: "Varios", icon: <HomeRepairServiceIcon />, path: TOPIC_ROUTES.UNAL },
];

export const settings = [
  // { icon: <DarkModeIcon />, text: "Modo nocturno" },
  // { icon: <ColorLensIcon />, text: "Seleccionar paleta" },
  {
    name: "Ayuda",
    icon: <HelpCenterIcon />,
    path: INfORMATION_ROUTE,
    // onClick: () => navigate(INfORMATION_ROUTE),
  },
];

export default menuItems;

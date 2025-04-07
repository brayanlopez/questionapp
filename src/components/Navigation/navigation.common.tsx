import React from "react";

import CalculateIcon from "@mui/icons-material/Calculate";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HomeIcon from "@mui/icons-material/Home";

import { TOPIC_ROUTES } from "../../utils/routes";

// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';

// import SettingsIcon from '@mui/icons-material/Settings';

export const menuItems = [
  { name: "Inicio", icon: <HomeIcon />, path: "/" },
  { name: "Matemáticas", icon: <CalculateIcon />, path: TOPIC_ROUTES.MATH },
  { name: "Preguntas UNAL", icon: <EditNoteIcon />, path: TOPIC_ROUTES.UNAL },
];

export default menuItems;

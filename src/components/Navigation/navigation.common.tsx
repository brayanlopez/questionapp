import React from "react";

import EditNoteIcon from "@mui/icons-material/EditNote";
import HomeIcon from "@mui/icons-material/Home";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

import {
  INfORMATION_ROUTE,
  QUESTIONARY_ROUTE,
  TOPIC_ROUTES,
} from "../../utils/routes";

export interface NavItem {
  name: string;
  icon: React.ReactNode;
  path: string;
}

export const menuItems: NavItem[] = [
  { name: "Inicio", icon: <HomeIcon />, path: "/" },
  // { name: "Matemáticas", icon: <CalculateIcon />, path: TOPIC_ROUTES.MATH },
  { name: "Preguntas UNAL", icon: <EditNoteIcon />, path: TOPIC_ROUTES.UNAL },
  { name: "Quiz ", icon: <EditNoteIcon />, path: QUESTIONARY_ROUTE },
  // { name: "Varios", icon: <HomeRepairServiceIcon />, path: TOPIC_ROUTES.UNAL },
];

export const settings: NavItem[] = [
  // { icon: <DarkModeIcon />, text: "Modo nocturno" },
  // { icon: <ColorLensIcon />, text: "Seleccionar paleta" },
  { name: "Ayuda", icon: <HelpCenterIcon />, path: INfORMATION_ROUTE },
  // onClick: () => navigate(INfORMATION_ROUTE),
];

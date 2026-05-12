import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

import { NavItem, settings } from "./navigation.common";

interface IDrawerProps {
  open: boolean;
  toggleDrawer: () => void;
  menuItems: NavItem[];
}

export const DrawerComponent = ({
  open,
  toggleDrawer,
  menuItems,
}: IDrawerProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const onClickItem = (path: string) => {
    navigate(path);
    toggleDrawer();
  };

  const drawerWidth = 280;

  return (
    <Drawer
      open={open}
      onClose={toggleDrawer}
      sx={{
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1.5,
          borderBottom: 1,
          borderColor: alpha(theme.palette.divider, 0.6),
        }}
      >
        <Typography variant="subtitle1" fontWeight={700} color="primary.main">
          QuestionApp
        </Typography>
        <IconButton onClick={toggleDrawer} size="small">
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ px: 1, pt: 1 }}>
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => onClickItem(item.path)}
                selected={isActive}
                sx={{
                  borderRadius: 2,
                  "&.Mui-selected": {
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    "&:hover": {
                      bgcolor: alpha(theme.palette.primary.main, 0.15),
                    },
                    "& .MuiListItemIcon-root": { color: "primary.main" },
                    "& .MuiListItemText-primary": {
                      fontWeight: 600,
                      color: "primary.main",
                    },
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Divider />
      <List sx={{ px: 1, pb: 1 }}>
        {settings.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={index} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => onClickItem(item.path)}
                selected={isActive}
                sx={{
                  borderRadius: 2,
                  "&.Mui-selected": {
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    "& .MuiListItemIcon-root": { color: "primary.main" },
                    "& .MuiListItemText-primary": {
                      fontWeight: 600,
                      color: "primary.main",
                    },
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

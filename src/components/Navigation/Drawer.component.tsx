import React from "react";
import {
  Button,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuList,
  Typography,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";

interface IDrawerProps {
  open: boolean;
  toggleDrawer: () => void;
  menuItems: [];
}

export const DrawerComponent = ({
  open,
  toggleDrawer,
  menuItems,
}: IDrawerProps) => {
  const navigate = useNavigate();

  const onClickIem = (item) => {
    navigate(item);
    toggleDrawer();
  };

  return (
    <Drawer open={open} onClose={toggleDrawer}>
      {/* <Toolbar></Toolbar> */}
      <Button
        variant="text"
        onClick={toggleDrawer}
        sx={{ width: "100%", margin: 0 }}
      >
        {/* <ChevronLeftIcon /> */}
        <Typography variant="body1" color="initial">
          Close Drawer
        </Typography>
      </Button>

      {menuItems.map((item: any, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton onClick={() => onClickIem(item.path)}>
            <ListItemIcon>{item?.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
      <Divider />
      <MenuList />
    </Drawer>
  );
};

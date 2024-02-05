import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleNavigation = (route: string) => {
    router.push(route);
    setIsDrawerOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Menu button for smaller screens */}
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>

        {/* Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Crypto Platform
        </Typography>

        {/* Navigation Drawer for smaller screens */}
        <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
          <List>
            <ListItem button onClick={() => handleNavigation('/')}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('/ratepages')}>
              <ListItemText primary="Rate" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('/exchangepages')}>
              <ListItemText primary="Exchanges" />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('/MarketPage')}>
              <ListItemText primary="Market" />
            </ListItem>
            {/* Add more menu items as needed */}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

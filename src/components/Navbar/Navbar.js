import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              onClick={() => setShowDrawer(!showDrawer)}
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Mail Delivery Service
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        anchor={'left'}
        open={showDrawer ? true : false}
        onClose={() => setShowDrawer(!showDrawer)}
      >
        <List style={{ width: '300px' }}>
          <ListItem
            button
            component={Link}
            to='/package'
            onClick={() => setShowDrawer(false)}
          >
            <ListItemText primary={'Packages'} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to='/'
            onClick={() => setShowDrawer(false)}
          >
            <ListItemText primary={'Customers'} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to='/invoices'
            onClick={() => setShowDrawer(false)}
          >
            <ListItemText primary={'Invoices'} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;

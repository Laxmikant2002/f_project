import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Avatar, Menu, MenuItem, IconButton, Box } from "@mui/material";
import HowToVoteIcon from "@mui/icons-material/HowToVote";

const Navbar = ({ currentAccount }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'background.paper' }}>
      <Toolbar>
        <HowToVoteIcon sx={{ mr: 2, color: 'primary.main' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.primary' }}>
          Decentralized Voting
        </Typography>

        <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 4 }}>
          <Button color="inherit" component={Link} to="/home">Home</Button>
          <Button color="inherit" component={Link} to="/voter-list">Voters</Button>
          <Button color="inherit" component={Link} to="/results">Results</Button>
          <Button color="inherit" component={Link} to="/admin-dashboard">Admin</Button>
        </Box>

        <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            {currentAccount ? currentAccount.slice(0, 2).toUpperCase() : 'U'}
          </Avatar>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleNavigation('/profile')}>Profile</MenuItem>
          <MenuItem onClick={() => handleNavigation('/security-audit')}>Security</MenuItem>
          <MenuItem onClick={() => handleNavigation('/')}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
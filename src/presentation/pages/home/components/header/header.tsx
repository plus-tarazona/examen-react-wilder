import { AppBar, Avatar, Box, Button, Icon, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logoImg from "../../../../assets/images/tu-prutec.svg";
import userIcon from "../../../../assets/images/user-icon.svg";
import arrowDownIcon from "../../../../assets/images/arrow-down.svg";
import { useState } from "react";

const settings = ['Perfil', 'Cuenta', 'Dashboard', 'Cerrar sesión'];

export default function Header() {
  // const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const svgUserIcon = (
    <Icon>
      <img alt="user settings" src={arrowDownIcon} width="20" height="20" />
    </Icon>
  );
  
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="header" data-testid="header">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <img data-testid="logo" src={logoImg} />
            </Box>
            
            <Box>
              <Tooltip title="Open user settings">
                <Button variant="contained" endIcon={svgUserIcon} onClick={handleOpenUserMenu}>
                  USER NAME
                </Button>
                {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={userIcon} />
                </IconButton> */}
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}

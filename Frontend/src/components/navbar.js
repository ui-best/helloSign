import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
//import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Icon from ".././pages/Assets/icon.png";
import { useSelector } from "react-redux";
//import { width } from "@mui/system";
const pages = [];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const user = useSelector(state => state.user)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  /*const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };*/

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(185, 207, 223, 0.19)",
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.22);",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ backgroundColor: "rgba(185, 207, 223, 0.19)" }}
      >
        <Toolbar disableGutters>
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex", color:"#3BA6F2", fontSize:"x-large", fontFamily:'Varela Round', fontWeight:"bold" } }}
            >
              HelloSign
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            HelloSign
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            {!user ? <>
              <Link to="/register">
                <div style={{
                  border: "1px solid #3BA6F2",
                  borderRadius: "15px",
                  backgroundColor: "white",
                  color: "#3BA6F2",
                  width: "90px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "30px",
                  cursor: "pointer"

                }}>Sign Up</div>
              </Link>
              <Link to="/login">
                <div style={{
                  color: "white", border: "1px solid #3BA6F2",
                  borderRadius: "15px",
                  backgroundColor: "#3BA6F2",
                  width: "90px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "30px",
                  cursor: "pointer"

                }}>
                  Login
                </div>
              </Link>
            </>
              :
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Link to="/profile">
                  <Avatar alt={user?.name} src={user.dp ? user.dp : Icon} />
                </Link>
              </IconButton>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

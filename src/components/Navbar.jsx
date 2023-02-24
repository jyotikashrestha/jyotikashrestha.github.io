import { LockOutlined, Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Button as Btn,
  Stack,
  Typography,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navItems = [];
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <AppBar component="nav" elevation={0} color="" position="sticky">
        <Container>
          <Stack
            direction={"row"}
            alignItems="flex-start"
            sx={{
              width: "100%",
              justifyContent: { xs: "none", sm: "space-between" },
              paddingY: "15px",
            }}
          >
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              sx={{ fontWeight: "700" }}
              className="text-subheading font-jost"
            >
              JS
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Btn
                  key={item}
                  sx={{
                    color: "#000000",
                    paddingX: "1rem",
                    textTransform: "none",
                  }}
                  className="font-jost text-subheading"
                >
                  {item}
                </Btn>
              ))}
              <Button
                name={
                  <>
                    <LockOutlined
                      sx={{
                        height: "15px",
                        marginBottom: "4px",
                      }}
                    />
                    Login
                  </>
                }
                onClick={() => {
                  navigate("/login");
                }}
                padding="7px 25px"
                textVariant="body2"
              ></Button>
            </Box>
          </Stack>
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
              "& .MuiPaper-root": {
                minWidth: 180,
              },
            }}
          >
            {navItems.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography
                  className="font-jost text-subheading"
                  textAlign="center"
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
            <Divider />
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography
                textAlign="center"
                className="text-secondary font-jost"
              >
                Sign In
                <LockOutlined
                  sx={{
                    height: "15px",
                    marginBottom: "4px",
                  }}
                />
              </Typography>
            </MenuItem>
          </Menu>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;

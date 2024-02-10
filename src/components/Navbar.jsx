import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { Link } from "react-router-dom";

const drawerWidth = 100;
const drawerHeight = 120;
const drawerColor = "linear-gradient( #ff66c4, #cb6ce6, #5170ff)";
const navItems = ["contacto"];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                    variant="h6"
                    sx={{
                        color: "#ffbd59",
                        fontFamily: "Bebas Neue",
                        fontSize: {
                            xs: "25px",
                            sm: "10px",
                            md: "14px",
                            lg: "14px",
                        },
                        fontWeight: "800",
                        "&:hover": { textShadow: "0 0 10px #ffbd59" },
                    }}
                >
                    {" "}
                    PG .
                </Typography>
            </Link>

            <Divider />
            <List>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button
                        sx={{
                            color: "#ffbd59",
                            fontFamily: "Montserrat",

                            fontWeight: "800",
                            "&:hover": { textShadow: "0 0 10px #ffbd59" },
                            fontSize: {
                                xs: "11px",
                                sm: "11px",
                                md: "14px",
                                lg: "14px",
                            },
                            textAlign: "center",
                        }}
                    >
                        Inicio
                    </Button>
                </Link>
                <Link to="/contacto" style={{ textDecoration: "none" }}>
                    <Button
                        sx={{
                            color: "#ffbd59",
                            fontFamily: "Montserrat",

                            fontWeight: "800",
                            "&:hover": { textShadow: "0 0 10px #ffbd59" },
                            fontSize: {
                                xs: "11px",
                                sm: "11px",
                                md: "14px",
                                lg: "14px",
                            },
                            textAlign: "center",
                        }}
                    >
                        Contacto
                    </Button>
                </Link>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                <Toolbar>
                    <IconButton onClick={handleDrawerToggle} color="inherit" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: "none" } }}>
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "block" },
                            color: "#ffbd59",
                            fontFamily: "Bebas Neue",
                            fontWeight: "800",
                            fontSize: "35px",
                        }}
                    >
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <div className="logo-text">PG .</div>
                        </Link>
                    </Typography>
                    <button onClick={handleLikeClick} className={liked ? "not-like-text " : "like-text"}>
                        ME GUSTA <FavoriteIcon sx={{ color: "tomato", width: "18px", marginRight: "10px" }} />
                        {liked ? "Te gusta esta página!" : ""}
                    </button>

                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Button
                                sx={{
                                    color: "#ffbd59",
                                    fontFamily: "Montserrat",

                                    fontWeight: "800",
                                    "&:hover": { textShadow: "0 0 10px #ffbd59" },
                                    fontSize: {
                                        xs: "9px",
                                        sm: "10px",
                                        md: "14px",
                                        lg: "14px",
                                    },
                                }}
                            >
                                Inicio
                            </Button>
                        </Link>

                        {navItems.map((item) => (
                            <Link key={item} to={`/${item}`} style={{ textDecoration: "none" }}>
                                <Button
                                    sx={{
                                        color: "#ffbd59",
                                        fontFamily: "Montserrat",
                                        fontSize: {
                                            xs: "9px",
                                            sm: "10px",
                                            md: "14px",
                                            lg: "14px",
                                        },
                                        fontWeight: "800",
                                        "&:hover": { textShadow: "0 0 10px #ffbd59" },
                                    }}
                                >
                                    {item}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none", fontFamily: "Montserrat" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, height: drawerHeight, background: drawerColor },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Typography></Typography>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;

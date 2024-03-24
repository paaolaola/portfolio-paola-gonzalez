import React, { useState, useEffect, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";
import "../assets/css/Navbar.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { animateScroll as scroll } from "react-scroll";

const drawerWidth = { width: "100%" };
const drawerHeight = { height: "50px" };
const drawerColor = "linear-gradient(to top, #ff66c4, #cb6ce6, #5170ff)";
const navItems = ["contacto"];

function DrawerAppBar(props) {
    //context para scroll del home
    const { aboutRef, projectsRef, studiesRef } = useContext(ProjectContext);

    // nuevo estados para la condicion de la navbar
    const location = useLocation();
    const [showNavItem, setShowNavItem] = useState(true);

    // useEffect para eliminar los componentes de la navbar al estar en cv y contacto
    useEffect(() => {
        if (location.pathname === "/curriculum" || location.pathname === "/contacto") {
            setShowNavItem(false);
        } else {
            setShowNavItem(true);
        }
    }, [location.pathname]);

    // scroll de las secciones del home
    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    //estados para la funcion del like corazon
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [liked, setLiked] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    //condicion para el like del corazón
    const handleLikeClick = () => {
        setLiked(!liked);
    };
    useEffect(() => {
        const likeGuardado = localStorage.getItem("like");

        if (likeGuardado === "true") {
            setLiked(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("like", liked.toString());
    }, [liked]);

    //scroll top del inicio
    const scrollToTop = () => {
        scroll.scrollToTop({
            top: 0,
            behavior: "smooth",
            block: "start",
        });
    };

    //logica de la navbar mobile
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                    variant="h6"
                    sx={{
                        color: "#ffbd59",
                        fontFamily: "Bebas Neue",
                        fontSize: {
                            xs: "30px",
                            sm: "10px",
                            md: "14px",
                            lg: "14px",
                        },
                        fontWeight: "400",
                        "&:hover": { textShadow: "0 0 10px #ffbd59" },
                        margin: "3px",
                        paddingLeft: "1rem",
                    }}
                    onClick={scrollToTop}
                >
                    {" "}
                    PG .
                </Typography>
            </Link>
            <Divider />
            <List>
                {showNavItem && (
                    <>
                        <Button
                            sx={{
                                color: "#ffbd59",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                "&:hover": { textShadow: "0 0 10px #ffbd59" },
                                fontSize: {
                                    xs: "9px",
                                    sm: "12px",
                                    md: "14px",
                                    lg: "14px",
                                },
                                textAlign: "center",
                                margin: "4px",
                            }}
                            onClick={() => scrollToRef(aboutRef)}
                        >
                            SOBRE MI
                        </Button>

                        <Button
                            sx={{
                                color: "#ffbd59",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                "&:hover": { textShadow: "0 0 10px #ffbd59" },
                                fontSize: {
                                    xs: "9px",
                                    sm: "12px",
                                    md: "14px",
                                    lg: "14px",
                                },
                                textAlign: "center",
                                margin: "1px",
                            }}
                            onClick={() => scrollToRef(projectsRef)}
                        >
                            PROYECTOS
                        </Button>

                        <Button
                            sx={{
                                color: "#ffbd59",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                "&:hover": { textShadow: "0 0 10px #ffbd59" },
                                fontSize: {
                                    xs: "9px",
                                    sm: "12px",
                                    md: "14px",
                                    lg: "14px",
                                },
                                textAlign: "center",
                                margin: "1px",
                            }}
                            onClick={() => scrollToRef(studiesRef)}
                        >
                            ESTUDIOS
                        </Button>
                    </>
                )}

                <Link to="/curriculum" style={{ textDecoration: "none" }}>
                    <Button
                        sx={{
                            color: "#ffbd59",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            "&:hover": { textShadow: "0 0 10px #ffbd59" },
                            fontSize: {
                                xs: "9px",
                                sm: "12px",
                                md: "14px",
                                lg: "14px",
                            },
                            textAlign: "center",
                            margin: "-20px",
                        }}
                    >
                        CV
                    </Button>
                </Link>

                <Link to="/contacto" style={{ textDecoration: "none" }}>
                    <Button
                        sx={{
                            color: "#ffbd59",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            "&:hover": { textShadow: "0 0 10px #ffbd59" },
                            fontSize: {
                                xs: "9px",
                                sm: "12px",
                                md: "14px",
                                lg: "14px",
                            },
                            textAlign: "center",
                            margin: "1px",
                        }}
                    >
                        Contacto
                    </Button>
                </Link>
            </List>
        </Box>
    );

    //logica de la desktop navbar
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
                <Toolbar>
                    <IconButton
                        onClick={handleDrawerToggle}
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ display: { sm: "none" }, color: "#ffbd59" }}
                    >
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
                            <div onClick={scrollToTop} className="logo-text">
                                PG .
                            </div>
                        </Link>
                    </Typography>
                    <button onClick={handleLikeClick} className={liked ? "not-like-text " : "like-text"}>
                        <FavoriteIcon sx={{ color: "tomato", width: "18px", marginRight: "10px" }} />
                        {liked ? "Te gusta esta página!" : ""}
                    </button>

                    <Box sx={{ display: { xs: "none", sm: "block" }, marginLeft: "auto" }}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Button
                                onClick={scrollToTop}
                                sx={{
                                    color: "#ffbd59",
                                    fontFamily: "Montserrat",

                                    fontWeight: "800",
                                    "&:hover": { textShadow: "0 0 10px #ffbd59" },
                                    fontSize: {
                                        xs: "9px",
                                        sm: "10px",
                                        md: "12px",
                                        lg: "12px",
                                    },
                                }}
                            >
                                Inicio
                            </Button>
                        </Link>

                        {showNavItem && (
                            <>
                                <Button
                                    sx={{
                                        color: "#ffbd59",
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        "&:hover": { textShadow: "0 0 10px #ffbd59" },
                                        fontSize: {
                                            xs: "9px",
                                            sm: "10px",
                                            md: "12px",
                                            lg: "12px",
                                        },
                                        textAlign: "center",
                                    }}
                                    onClick={() => scrollToRef(aboutRef)}
                                >
                                    SOBRE MI
                                </Button>

                                <Button
                                    sx={{
                                        color: "#ffbd59",
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        "&:hover": { textShadow: "0 0 10px #ffbd59" },
                                        fontSize: {
                                            xs: "9px",
                                            sm: "10px",
                                            md: "12px",
                                            lg: "12px",
                                        },
                                        textAlign: "center",
                                    }}
                                    onClick={() => scrollToRef(projectsRef)}
                                >
                                    PROYECTOS
                                </Button>

                                <Button
                                    sx={{
                                        color: "#ffbd59",
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        "&:hover": { textShadow: "0 0 10px #ffbd59" },
                                        fontSize: {
                                            xs: "9px",
                                            sm: "10px",
                                            md: "12px",
                                            lg: "12px",
                                        },
                                        textAlign: "center",
                                    }}
                                    onClick={() => scrollToRef(studiesRef)}
                                >
                                    ESTUDIOS
                                </Button>
                            </>
                        )}

                        <Link to="/curriculum" style={{ textDecoration: "none" }}>
                            <Button
                                sx={{
                                    color: "#ffbd59",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    "&:hover": { textShadow: "0 0 10px #ffbd59" },
                                    fontSize: {
                                        xs: "9px",
                                        sm: "10px",
                                        md: "12px",
                                        lg: "12px",
                                    },
                                    textAlign: "center",
                                }}
                            >
                                CV
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
                                            md: "12px",
                                            lg: "12px",
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

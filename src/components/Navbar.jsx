import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProjectContext } from '../context/ProjectContext';
import { animateScroll as scroll } from 'react-scroll';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../styles/Navbar.css';

const drawerWidth = { width: '100%' };
const drawerHeight = { height: '55px' };
const drawerColor = 'transparent';
const navItems = ['contacto'];

function DrawerAppBar(props) {
    //Context para scroll del home
    const { aboutRef, projectsRef, studiesRef } = useContext(ProjectContext);

    // Nuevos estados para la condicion de la navbar
    const navigate = useNavigate();
    const [showNavItem, setShowNavItem] = useState(true);

    // Scroll de las secciones del home
    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    //Logica del cambio de ruta en curriculum y contacto
    const handleNavClick = (path, ref) => {
        navigate(path);
        setTimeout(() => {
            scrollToRef(ref);
        }, 100);
    };

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    //Scroll top para el boton de inicio
    const scrollToTop = () => {
        scroll.scrollToTop({
            top: 0,
            behavior: 'smooth',
            block: 'start',
        });
    };

    //Logica de la navbar mobile
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ display: 'flex', justifyContent: 'space-between', marginRight: '15px' }}>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <Typography
                    variant='h6'
                    sx={{
                        color: '#ffbd59',
                        fontFamily: 'Bebas Neue',
                        fontSize: {
                            xs: '30px',
                            sm: '10px',
                            md: '14px',
                            lg: '14px',
                        },
                        fontWeight: '400',
                        '&:hover': { textShadow: '0 0 10px #ffbd59' },
                        margin: '3px',
                        paddingLeft: '1rem',
                    }}
                    onClick={scrollToTop}
                >
                    {' '}
                    PG .
                </Typography>
            </Link>
            <Divider />
            <List>
                {showNavItem && (
                    <>
                        <Button
                            sx={{
                                color: '#ffbd59',
                                fontFamily: 'Montserrat',
                                fontWeight: '600',
                                '&:hover': { textShadow: '0 0 10px #ffbd59' },
                                fontSize: {
                                    xs: '8px',
                                    sm: '12px',
                                    md: '14px',
                                    lg: '14px',
                                },
                                textAlign: 'center',
                                marginTop: '4px',
                            }}
                            onClick={() => handleNavClick('/', aboutRef)}
                        >
                            SOBRE MI
                        </Button>

                        <Button
                            sx={{
                                color: '#ffbd59',
                                fontFamily: 'Montserrat',
                                fontWeight: '600',
                                '&:hover': { textShadow: '0 0 10px #ffbd59' },
                                fontSize: {
                                    xs: '8px',
                                    sm: '12px',
                                    md: '14px',
                                    lg: '14px',
                                },
                                textAlign: 'center',
                                marginTop: '4px',
                            }}
                            onClick={() => handleNavClick('/', projectsRef)}
                        >
                            PROYECTOS
                        </Button>

                        <Button
                            sx={{
                                color: '#ffbd59',
                                fontFamily: 'Montserrat',
                                fontWeight: '600',
                                '&:hover': { textShadow: '0 0 10px #ffbd59' },
                                fontSize: {
                                    xs: '8px',
                                    sm: '12px',
                                    md: '14px',
                                    lg: '14px',
                                },
                                textAlign: 'center',
                                marginTop: '4px',
                            }}
                            onClick={() => handleNavClick('/', studiesRef)}
                        >
                            ESTUDIOS
                        </Button>
                    </>
                )}

                <Link to='/curriculum' style={{ textDecoration: 'none' }}>
                    <Button
                        sx={{
                            color: '#ffbd59',
                            fontFamily: 'Montserrat',
                            fontWeight: '600',
                            '&:hover': { textShadow: '0 0 10px #ffbd59' },
                            fontSize: {
                                xs: '8px',
                                sm: '12px',
                                md: '14px',
                                lg: '14px',
                            },
                            textAlign: 'center',
                            marginTop: '4px',
                            marginLeft: '-20px',
                            marginRight: '-20px',
                        }}
                    >
                        CV
                    </Button>
                </Link>

                <Link to='/contacto' style={{ textDecoration: 'none' }}>
                    <Button
                        sx={{
                            color: '#ffbd59',
                            fontFamily: 'Montserrat',
                            fontWeight: '600',
                            '&:hover': { textShadow: '0 0 10px #ffbd59' },
                            fontSize: {
                                xs: '8px',
                                sm: '12px',
                                md: '14px',
                                lg: '14px',
                            },
                            textAlign: 'center',
                            marginTop: '4px',
                        }}
                    >
                        CONTACTO
                    </Button>
                </Link>
            </List>
        </Box>
    );

    //Logica de la desktop navbar
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <div className='box-navbar'>
                <AppBar
                    component='nav'
                    sx={{
                        backgroundColor: 'transparent',
                        backdropFilter: 'blur(10px)',
                        boxShadow: 'none',
                    }}
                >
                    <Toolbar>
                        <IconButton
                            onClick={handleDrawerToggle}
                            color='inherit'
                            aria-label='open drawer'
                            edge='end'
                            sx={{ display: { sm: 'none' }, color: '#ffbd59', marginLeft: 'auto' }}
                        >
                            {' '}
                            <MenuIcon className='menu-icon' />
                        </IconButton>

                        <Typography
                            variant='h6'
                            component='div'
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', sm: 'inline-block' },
                                color: '#ffbd59',
                                fontFamily: 'Bebas Neue',
                                fontWeight: '800',
                                fontSize: '35px',
                                width: '5%',
                            }}
                        >
                            {' '}
                            <Link to='/' style={{ textDecoration: 'none' }} onClick={scrollToTop} className='logo-text'>
                                PG .
                            </Link>
                        </Typography>

                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                position: 'fixed',
                                top: '25px',
                                right: '10px',
                                zIndex: 1000,
                            }}
                        >
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <Button
                                    onClick={scrollToTop}
                                    sx={{
                                        color: '#ffbd59',
                                        fontFamily: 'Montserrat',
                                        fontWeight: '800',
                                        '&:hover': { textShadow: '0 0 10px #ffbd59' },
                                        fontSize: {
                                            xs: '9px',
                                            sm: '10px',
                                            md: '12px',
                                            lg: '12px',
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
                                            color: '#ffbd59',
                                            fontFamily: 'Montserrat',
                                            fontWeight: '600',
                                            '&:hover': { textShadow: '0 0 10px #ffbd59' },
                                            fontSize: {
                                                xs: '9px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '12px',
                                            },
                                            textAlign: 'center',
                                        }}
                                        onClick={() => handleNavClick('/', aboutRef)}
                                    >
                                        SOBRE MI
                                    </Button>

                                    <Button
                                        sx={{
                                            color: '#ffbd59',
                                            fontFamily: 'Montserrat',
                                            fontWeight: '600',
                                            '&:hover': { textShadow: '0 0 10px #ffbd59' },
                                            fontSize: {
                                                xs: '9px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '12px',
                                            },
                                            textAlign: 'center',
                                        }}
                                        onClick={() => handleNavClick('/', projectsRef)}
                                    >
                                        PROYECTOS
                                    </Button>

                                    <Button
                                        sx={{
                                            color: '#ffbd59',
                                            fontFamily: 'Montserrat',
                                            fontWeight: '600',
                                            '&:hover': { textShadow: '0 0 10px #ffbd59' },
                                            fontSize: {
                                                xs: '9px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '12px',
                                            },
                                            textAlign: 'center',
                                        }}
                                        onClick={() => handleNavClick('/', studiesRef)}
                                    >
                                        ESTUDIOS
                                    </Button>
                                </>
                            )}

                            <Link to='/curriculum' style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{
                                        color: '#ffbd59',
                                        fontFamily: 'Montserrat',
                                        fontWeight: '600',
                                        '&:hover': { textShadow: '0 0 10px #ffbd59' },
                                        fontSize: {
                                            xs: '9px',
                                            sm: '10px',
                                            md: '12px',
                                            lg: '12px',
                                        },
                                        textAlign: 'center',
                                        margin: '-15px',
                                    }}
                                >
                                    CV
                                </Button>
                            </Link>

                            {navItems.map((item) => (
                                <Link key={item} to={`/${item}`} style={{ textDecoration: 'none' }}>
                                    <Button
                                        sx={{
                                            color: '#ffbd59',
                                            fontFamily: 'Montserrat',
                                            fontSize: {
                                                xs: '9px',
                                                sm: '10px',
                                                md: '12px',
                                                lg: '12px',
                                            },
                                            fontWeight: '800',
                                            '&:hover': { textShadow: '0 0 10px #ffbd59' },
                                        }}
                                    >
                                        {item}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </div>

            <nav>
                <Drawer
                    container={container}
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none', fontFamily: 'Montserrat' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            height: drawerHeight,
                            background: drawerColor,
                            boxShadow: 'none',
                            opacity: '1',
                            backdropFilter: 'blur(10px)',
                        },
                    }}
                >
                    {drawer}
                </Drawer>{' '}
            </nav>

            <Box component='main' sx={{ p: 3 }}>
                <Toolbar />

                <Typography> </Typography>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;

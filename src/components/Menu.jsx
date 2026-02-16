import React from 'react';
import {
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBInputGroup,
  MDBInput,
  MDBBtn
} from "mdb-react-ui-kit";
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import Toolbar from '@mui/material/Toolbar';
import { useState } from "react";
import { Link } from "react-router";
import logo from "../assets/images/logo.png";

/**
 * Componente para el menú de navegación.
 * @component
 * @returns {JSX.Element} JSX element del componente Menu.
 */
function Menu() {
  const [openBasic, setOpenBasic] = useState(false);


  return (
    <>
      {<AppBar>
        <Toolbar sx={{ "justifyContent": "space-around", "alignItems": "center" }}>
          <Typography variant="h1" align="center">TRUEKIT</Typography>
          <Avatar src={logo} sx={{ "width": "5.5%", "height": "5.5%" }}>
          </Avatar>
          <MDBInputGroup>
            <MDBInput label='Search' />
            <MDBBtn rippleColor='dark'>
              <MDBIcon icon='search' />
            </MDBBtn>
          </MDBInputGroup>
        </Toolbar>
      </AppBar>}
      
    </>
  );
}
export default Menu;
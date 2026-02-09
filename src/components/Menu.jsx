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
} from "mdb-react-ui-kit";
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
    <MDBNavbar expand="lg" light bgColor="light" sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
        }}>
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img src={logo} height="30" alt="" loading="lazy" />
          TRUEKIT
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic} className="w-100">
          {/* Contenedor principal para el menú y los botones */}
          <MDBNavbarNav className="w-100 d-flex justify-content-between align-items-center">
            {/* Menú de la izquierda */}
            <div className="d-flex">
            </div>

            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default Menu;
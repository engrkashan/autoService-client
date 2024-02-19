import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/Booking");
  };

  const token = localStorage.getItem("token");
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Autoservisas
          </NavLink>

          <NavLink to="/BookingApp" activeStyle>
            Reserve the time (user side)
          </NavLink>

          <NavLink to="/Contact" activeStyle>
            Kontaktai
          </NavLink>
          {token ? (
            <>
              <NavLink to="/AvailableTimeForm">
                AvailableTimeForm (for admin)
              </NavLink>
              <NavLink onClick={handleLogout}>Logout</NavLink>
            </>
          ) : (
            <NavLink to="/Booking" activeStyle>
              Log in (for admin)
            </NavLink>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../../hooks/api/auth/Logout";
import { RiArrowLeftFill, RiLogoutBoxFill } from "@remixicon/react";
import "../../styles/components/common/header.style.scss";
import { isMobile } from "react-device-detect";

function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <header className="header-main-container">
      {!isMobile && <h1>Header</h1>}
      {!isMobile ? (
        <>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <RiArrowLeftFill />
          </button>
          {pathname !== "/" && (
            <button onClick={() => navigate("/")}>Home</button>
          )}
          {pathname !== "/login" && !localStorage.getItem("token") && (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
          {pathname !== "/user-list" && localStorage.getItem("token") && (
            <button onClick={() => navigate("/user-list")}>User List</button>
          )}
          {pathname !== "/user-management" && localStorage.getItem("token") && (
            <button onClick={() => navigate("/user-management")}>
              User Management
            </button>
          )}
          {localStorage.getItem("token") && (
            <button onClick={() => Logout()}>Logout</button>
          )}
        </>
      ) : (
        <>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <RiArrowLeftFill />
          </button>
          {pathname !== "/" && (
            <button onClick={() => navigate("/")}>Home</button>
          )}
          {pathname !== "/login" && !localStorage.getItem("token") && (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
          {pathname !== "/user-list" && localStorage.getItem("token") && (
            <button onClick={() => navigate("/user-list")}>User List</button>
          )}
          {pathname !== "/user-management" && localStorage.getItem("token") && (
            <button onClick={() => navigate("/user-management")}>
              User Management
            </button>
          )}
          {localStorage.getItem("token") && (
            <button onClick={() => Logout()}>
              <RiLogoutBoxFill />
            </button>
          )}
        </>
      )}
    </header>
  );
}

export default Header;

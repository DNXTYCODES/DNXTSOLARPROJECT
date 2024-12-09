// import React, { useState } from "react";
// import "./Header.css";
// import { BiMenuAltRight } from "react-icons/bi";
// import { getMenuStyles } from "../../utils/common";
// import useHeaderColor from "../../hooks/useHeaderColor";
// import OutsideClickHandler from "react-outside-click-handler";
// import { Link, NavLink } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import ProfileMenu from "../ProfileMenu/ProfileMenu";
// import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
// import useAuthCheck from "../../hooks/useAuthCheck.jsx";

// const Header = () => {
//   const [menuOpened, setMenuOpened] = useState(false);
//   const headerColor = useHeaderColor();
//   const [modalOpened, setModalOpened] = useState(false);
//   const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
//   const { validateLogin } = useAuthCheck();

//   // List of admin emails
//   const adminEmails = [
//     "ayomatthew@gmail.com",
//     "admin2@example.com",
//     "admin3@example.com",
//   ];

//   // Check if user is admin
//   const isAdmin = isAuthenticated && user && adminEmails.includes(user.email);

//   const handleAddPropertyClick = () => {
//     if (validateLogin()) {
//       setModalOpened(true);
//     }
//   };

//   return (
//     <section className="h-wrapper" style={{ background: headerColor }}>
//       <div className="flexCenter innerWidth paddings h-container">
//         {/* logo */}
//         <Link to="/">
//           <img src="./logo.png" alt="logo" width={100} />
//         </Link>

//         {/* menu */}
//         <OutsideClickHandler
//           onOutsideClick={() => {
//             setMenuOpened(false);
//           }}
//         >
//           <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
//             <NavLink to="/properties">Products</NavLink>
//             <span>Services</span>

//             <a href="mailto:ayomatthew891@gmail.com">Contact</a>

//             {/* Add Product only if authenticated */}
//             {!isAuthenticated ? (
//               <div>About Us</div>
//             ) : (
//               <div onClick={handleAddPropertyClick}>Add Product</div>
//             )}
//             <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />

//             {/* Admin Link */}
//             {/* {isAdmin && (
//               <NavLink to="/admin" className="admin-link">
//                 Admin
//               </NavLink>
//             )} */}

//               {/* admin link visible for development purpose */}

//               <NavLink to="/admin" className="admin-link">
//                 Admin
//               </NavLink>


//             {/* Login/Logout Button */}
//             {!isAuthenticated ? (
//               <button className="button" onClick={loginWithRedirect}>
//                 Login
//               </button>
//             ) : (
//               <ProfileMenu user={user} logout={logout} />
//             )}
//           </div>
//         </OutsideClickHandler>

//         {/* Medium and small screens */}
//         <div
//           className="menu-icon"
//           onClick={() => setMenuOpened((prev) => !prev)}
//         >
//           <BiMenuAltRight size={30} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Header;





import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import useAuthCheck from "../../hooks/useAuthCheck.jsx";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  // Check if the logged-in user is an admin (for admin link visibility)
  const adminEmails = ["ayomatthew@gmail.com", "admin2@example.com"];
  const isAdmin = isAuthenticated && user && adminEmails.includes(user.email);

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* Logo */}
        <Link to="/">
          <img src="./logo.png" alt="logo" width={100} />
        </Link>

        {/* Menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/properties">Products</NavLink>
            <span>Services</span>
            <a href="mailto:ayomatthew891@gmail.com">Contact</a>

            {/* Admin Link */}
            {isAdmin && (
              <NavLink to="/admin" className="admin-link">
                Admin
              </NavLink>
            )}

            {/* Login/Logout Button */}
            {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}
          </div>
        </OutsideClickHandler>

        {/* Menu Icon for Small Screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;

import { memo, useCallback, useState, useEffect, useContext } from "react";
// import { IoMenu } from "react-icons/all";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = memo(() => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [state] = useContext(UserContext);

  const onMenuToggle = useCallback(() => {
    setMenuVisible(!menuVisible);
  }, [menuVisible]);

  const closeMenu = useCallback(
    (event) => event.target.screen.width >= 640 && setMenuVisible(false),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, [closeMenu]);

  return (
    <nav className="px-3 sm:px-5 bg-yellow-500">
      <div className="flex items-center justify-between h-12 ">
        <div>
          <h1 className="text-white text-lg font-bold">Mo-Tani</h1>
        </div>
        <ul className="hidden sm:inline-flex gap-x-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          {state.isLogin ? (
            state?.user?.role.toLowerCase() === "admin" ? (
              <>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
              </>
            )
          ) : (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
        {/* <div className="sm:hidden">
          <IoMenu size="1.3em" onClick={onMenuToggle} />
        </div> */}
      </div>
      {menuVisible && (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {state.isLogin ? (
            <>
              <li>
                <Link to="/register">Profile</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
});

export default Navbar;

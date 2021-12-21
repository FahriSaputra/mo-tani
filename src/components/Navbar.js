import { memo, useCallback, useState, useEffect, useContext } from "react";
// import { IoMenu } from "react-icons/all";
import { QueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/mutations/Auth.mutations";
import { useGetUser } from "../hooks/queries/User.queries";
import { UserContext } from "../context/UserContext";

const Navbar = memo(() => {
  const [menuVisible, setMenuVisible] = useState(false);
  const logout = useLogout();
  const user = useGetUser();
  const queryClient = new QueryClient();
  const [state, dispatch] = useContext(UserContext);

  const navigate = useNavigate();

  const onLogout = () => {
    logout.mutate("", {
      onSuccess: () => {
        dispatch({
          type: "LOGOUT",
        });
        queryClient.clear();
        queryClient.removeQueries("user");
        window.alert("Success");
        navigate("/");
      },
      onError: () => {
        window.alert("Error");
      },
    });
  };

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
            <>
              <li>
                <Link to="/register">Profile</Link>
              </li>
              <li>
                <p role="button" onClick={onLogout}>
                  Logout
                </p>
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
        {/* <div className="sm:hidden">
          <IoMenu size="1.3em" onClick={onMenuToggle} />
        </div> */}
      </div>
      {menuVisible && (
        <ul>
          <li>
            <Link to="/" onClick={() => console.log("klik")}>
              Home
            </Link>
          </li>
          {state.isLogin ? (
            <>
              <li>
                <Link to="/register">Profile</Link>
              </li>
              <li>
                <p role="button" onClick={onLogout}>
                  Logout
                </p>
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

import { useEffect, useState, useContext } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useGetUser } from "./hooks/queries/User.queries";
import { QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AuthRoute from "./routes/AuthRoute";
import AdminRoute from "./routes/AdminRoute";
import { UserContext } from "./context/UserContext";
import { setAuthToken } from "./helpers/ApiHelpers";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import AddProduct from "./pages/AddProduct";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import ProductPages from "./pages/Products";

export const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <>{children}</>;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const [state, dispatch] = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const getUser = useGetUser();

  const getUserData = async () => {
    if (token && state?.user === null) {
      getUser
        .refetch()
        .then((data) => {
          setAuthToken(token);
          dispatch({
            type: "LOGIN",
            payload: {
              data: {
                user: data.data,
                token,
              },
            },
          });
        })
        .catch(() => localStorage.clear())
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route
              index
              element={
                <AuthRoute reverse={true}>
                  <Home />
                </AuthRoute>
              }
            />
            <Route
              path="/login"
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
            />
            <Route
              path="/register"
              element={
                <AuthRoute>
                  <Register />
                </AuthRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthRoute reverse={true} isAllow={true}>
                  <Profile />
                </AuthRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <AuthRoute reverse={true}>
                  <Checkout />
                </AuthRoute>
              }
            />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route
              path="/cart"
              element={
                <AuthRoute reverse={true}>
                  <Cart />
                </AuthRoute>
              }
            />
            <Route
              path="/add-product"
              element={
                <AdminRoute>
                  <AddProduct />
                </AdminRoute>
              }
            />
            <Route
              path="/edit-product"
              element={
                <AdminRoute>
                  <AddProduct />
                </AdminRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <AdminRoute>
                  <Dashboard />
                </AdminRoute>
              }
            />
            <Route
              path="/products"
              element={
                <AdminRoute>
                  <ProductPages />
                </AdminRoute>
              }
            />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default App;

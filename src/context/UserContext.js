import { createContext, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  isLogin: false,
  user: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  console.log(payload, "payload");
  switch (type) {
    case "LOGIN":
      localStorage.setItem("token", payload.data.token);
      console.log("Dispatch jalan");
      return {
        ...state,
        isLogin: true,
        user: payload.data.user,
      };
    case "AUTH_ERROR":
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isLogin: false,
        user: null,
      };
    default:
      throw new Error();
  }
};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };

import { useContext } from "react";
import AuthContext from "../contex/AuthContex/AuthContext";

const useAuth = () => {
  const contex = useContext(AuthContext);
  return contex;
};
export default useAuth;

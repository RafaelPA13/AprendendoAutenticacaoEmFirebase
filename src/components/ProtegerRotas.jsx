import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtegerRotas({filho}) {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  return filho
}
export default ProtegerRotas;

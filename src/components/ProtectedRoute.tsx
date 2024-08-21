import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;


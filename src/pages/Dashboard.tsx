import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import Button from "../components/ui/button";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="pt-20 bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
          Protected Page "Dashboard"
        </h1>
        <Button onClick={handleLogout} className="mt-10">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;

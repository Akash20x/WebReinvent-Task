import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { useAuthStore } from "../store/authStore";
import Button from "../components/ui/button";
import Input from "../components/ui/input";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { token } = await login(email, password);
      setAuth(true, token);
      navigate("/dashboard");
    } catch (error) {
      alert("Sign In failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" bg-gray-50 mt-[8rem] md:mt-0">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <Input
                  label="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  name="email"
                  required
                />
              </div>
              <div>
                <Input
                  label="Password"
                  placeholder="••••••••"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button isLoading={isLoading}>Log in</Button>
              <p className="text-sm font-light text-gray-500 ">
                Don&apos;t have an account yet?{" "}
                <a
                  href="/signup"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

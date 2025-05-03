import React, { useState } from "react";
import { BottomWarning } from "../components/BottomWaring";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-[#6a82fb] to-[#fc5c7d] min-h-screen flex items-center justify-center overflow-hidden">

      {/* Transparent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#9d4edd] to-transparent opacity-50"></div>

      <div className="bg-white shadow-xl rounded-2xl px-8 py-10 w-full max-w-md z-10 backdrop-blur-lg">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />

        <div className="space-y-4 mt-4">
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            placeholder="raghav@gmail.com"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
            label={"Password"}
            type="password"
          />
        </div>

        <div className="pt-6">
          <Button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signin",
                {
                  username,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            }}
            label={"Sign in"}
            className="w-full py-3 bg-[#9d4edd] text-white rounded-lg shadow-md hover:bg-[#6e2ab5] transition duration-200 ease-in-out"
          />
        </div>

        <div className="mt-6 text-center">
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
            className="text-[#9d4edd] hover:text-[#6e2ab5] transition duration-200 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { BottomWarning } from "../components/BottomWaring";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-[#6a82fb] to-[#fc5c7d] min-h-screen flex items-center justify-center overflow-hidden">
      <div className="bg-white shadow-2xl rounded-2xl px-8 py-10 w-full max-w-md z-10">
        <Heading label={"Create your account"} />
        <SubHeading label={"Let's get started with your journey 🚀"} />

        <div className="space-y-4 mt-6">
          <InputBox
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            placeholder="you@example.com"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a strong password"
            label={"Password"}
          />
        </div>

        <div className="pt-6">
          <Button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                  firstName,
                  lastName,
                  username,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            }}
            label={"Sign up"}
            className="w-full py-3 bg-[#9d4edd] text-white rounded-lg shadow-md hover:bg-[#6e2ab5] transition duration-200 ease-in-out"
          />
        </div>

        <div className="mt-6 text-center">
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
            className="text-[#9d4edd] hover:text-[#6e2ab5] transition duration-200 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

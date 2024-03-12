import { CardWithForm } from "@/components/CardWithForm";
import SignUp from "@/components/SignUp";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex items-center justify-center
    bg-gradient-to-r from-[#1c6e89] to-[#7c7eb1]">
      <CardWithForm
        title="Sign Up"
        description={"Get started with your free account"}
        form={<SignUp />}
        nextDiscription={"Already have an account?"}
        link="signin"
      />
    </div>
  );
};

export default page;

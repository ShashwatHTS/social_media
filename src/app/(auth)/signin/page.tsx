import { CardWithForm } from "@/components/CardWithForm";
import SignIn from "@/components/SignIn";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-[#1c6e89] to-[#7c7eb1]">
      <CardWithForm
        title="Sign In"
        description={"Sign in to your account"}
        form={<SignIn />}
        nextDiscription={"Don't have an account?"}
        link="signup"
      />
    </div>
  );
};

export default page;

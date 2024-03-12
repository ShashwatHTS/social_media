"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const route = useRouter();
  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3000/api/user", {
      username,
      email,
      password,
      phone,
      img,
      name,
    });
    return response;
  };
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="container w-1/2 h-100 py-10 bg-black rounded-sm flex flex-col justify">
        <div className="text-4xl font-bold text-white m-5">Register </div>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        ></Input>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        ></Input>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        ></Input>
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        ></Input>
        <Input
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        ></Input>
        <Input
          onChange={(e) => setImg(e.target.value)}
          placeholder="ImageUrl"
        ></Input>
        <Button onClick={handleSubmit} className="mt-2 btn btn-primary">
          Submit
        </Button>
      </div>
    </section>
  );
};

export default SignUp;

"use server"

import { NextRequest } from "next/server";
import client from "../../../../db";

export async function login(email: string, password: string) {
    const user = await client.user.findUnique({
        where: {
            email: email,
            password: password
        }
    })
    if(!user){
        console.log("not found")
        return
    }
    console.log("---------------login-------------", user)
    return "Login Successful"
    
}

interface User {
    name: string;
    email: string;
    password: string;
    username: string;
    img: string;
    phone: string;
}
export async function register(req:NextRequest) {
    const body = await req.json();
    const user = await client.user.create({ data: body });
    console.log("---------body----------", body);
    return Response.json({
      data: user,
      message: "user successfully registered",
    });
  }
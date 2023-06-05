"use client";

import React from "react";
import { Button } from "../../components/components";
import GetUsers from "@/app/components/GetUsers";

const User = () => {
  return (
    <main className="flex min-h-screen flex-col items-end justify-center bg-white">
      <div className="flex min-h-[82vh] w-[94%] flex-col items-center justify-center mt-16 bg-[#f1f1f1] text-black shadow-xl">
        UserPage
        <GetUsers></GetUsers>
        <Button link="/" label="Voltar" />
      </div>
    </main>
  );
};

export default User;

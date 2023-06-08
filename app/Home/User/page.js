import React from "react";
import { Button } from "../../components/components";
import '../../styles/style.css'

const User = () => {
  return (
    <div className="flex min-h-[82vh] w-[94%] flex-col items-center justify-center mt-16 bg-[#f1f1f1] text-black shadow-xl">
      
    <main class = "allContent">
      <div class = "textTop">
        <p>Principal</p>
      </div>
      <div class="inputTop">
        <p class = "nameAll"><span class="textName">Nome:</span> <input type="text" class="inputName" placeholder="Digite seu nome" /></p>
        <p class = "nameUser"><span class="textUser">Usuario:</span><input type="text" class="inputUser" placeholder="Digite seu nome" /></p>
    </div>

    </main>

    </div>
  );
};

export default User;

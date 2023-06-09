import React from "react";
import { Button } from "../../components/components";
import '../../styles/style.css'

const User = () => {
  return (
    <div className="flex min-h-[82vh] w-[94%] flex-col items-center justify-center mt-16 bg-[#f1f1f1] text-black shadow-xl">
      
    <main class = "allContent">
      <div class = "textTop">
        <h1>Principal</h1>
      </div>
      <div class = "textTop2">
        <p>Tipo</p>
        <div class = "labelC">
          <input type="checkbox" class="myCheckbox" />
          <label for="myCheckbox">Pessoa</label>
          <input type="checkbox" class="myCheckbox" />
          <label for="myCheckbox">Empresa</label>
          <input type="checkbox" class="myCheckbox" />
          <label for="myCheckbox">Departamento</label>
        </div>
       
      </div>
      <div class = "inputAll">
        <div class="inputTop">
            <p class = "nameUser"><span class="textUser">Nome:</span><input type="text" class="inputUser2" placeholder="Digite seu nome" /></p>
          <div class = "inputUnder">
            <p class = "nameUser"><span class="textUser">Usuario:</span><input type="text" class="inputUser" placeholder="Digite seu usuario" /></p>
            <p class = "nameUser"><span class="textUser">Senha:</span><input type="text" class="inputUser" placeholder="Digite sua senha" /></p>
            <p class = "nameUser"><span class="textUser">Confirmação de Senha:</span><input type="text" class="inputUser" placeholder="Confirme sua senha" /></p>
          </div>
          <div class = "inputUnder2">
            <p class = "nameUser"><span class="textUser">Cpf:</span><input type="text" class="inputUser" placeholder="Digite seu cpf" /></p>
            <p class = "nameUser"><span class="textUser">Código de Referencia:</span><input type="text" class="inputUser" placeholder="Digite seu código de referencia" /></p>
            <p class = "nameUser"><span class="textUser">Cód Ref Adicional:</span><input type="text" class="inputUser" placeholder="Digite seu cód ref adicional" /></p>
          </div>

        </div>


        
      </div>
      <div class = "inputFooter">
          <div class = "footerUnder1">
            <p class = "nameUser3"><span class="textUser">Cargo:</span><input type="text" class="inputUser" placeholder="Digite seu cargo" /></p>
            <p class = "nameUser2"><span class="textUser">Classificação:</span><input type="text" class="inputUser" placeholder="Digite sua classificação" /></p>
          </div>

          <div class = "footerUnder2">
            <p class = "nameUser3"><span class="textUser">Perfil de acesso:</span><input type="text" class="inputUser" placeholder="Digite seu perfil de acesso" /></p>
            <p class = "nameUser2"><span class="textUser">Superior Hierarquico:</span><input type="text" class="inputUser" placeholder="superior hierarquico" /></p>
          </div>
          
          
        </div>
    </main>

    </div>
  );
};

export default User;

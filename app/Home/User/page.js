"use client"

import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import "../../styles/style.css";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "residenciafc-5c60b.firebaseapp.com",
  databaseURL: "https://residenciafc-5c60b-default-rtdb.firebaseio.com",
  projectId: "residenciafc-5c60b",
  storageBucket: "residenciafc-5c60b.appspot.com",
  messagingSenderId: "1096555771059",
  appId: "1:1096555771059:web:a2ca85fabc2e54c4e8acc6",
  measurementId: "G-Y17XMC32S0"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const User = () => {
  const [businessName, setNome] = useState("");
  const [user, setUsuario] = useState("");
  const [password, setSenha] = useState("");
  const [cpfCnpj, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");

const handleSubmit = (event) => {
  event.preventDefault();

  const userData = {
    businessName,
    user,
    password,
    cpfCnpj,
    telefone,
    email,
    endereco,
    dataDeInscricao: serverTimestamp()
  };

  addDoc(collection(db, "Persons"), userData)
    .then(() => {
      console.log("Dados enviados para o Firestore com sucesso!");
      setNome("");
      setUsuario("");
      setSenha("");
      setCpf("");
      setTelefone("");
      setEmail(""); 
      setEndereco("");
    })
    .catch((error) => {
      console.error("Erro ao enviar dados para o Firestore:", error);
    });
};

return (
    <main className="flex min-h-[82vh] w-[94%] flex-col items-center justify-center mt-16 bg-[#f1f1f1] text-black shadow-xl">
      <form className="allContent" onSubmit={handleSubmit}>
        <div>
          <div className="textTop2">
            <p>Tipo:</p>
            <div className="labelC">
              <input type="radio" className="myCheckbox" id="checkbox1" name="tipo"/>
              <label htmlFor="checkbox1">Pessoa</label>
              <input type="radio" className="myCheckbox" id="checkbox2" name="tipo"/>
              <label htmlFor="checkbox2">Empresa</label>
              <input type="radio" className="myCheckbox" id="checkbox3" name="tipo"/>
              <label htmlFor="checkbox3">Departamento</label>
            </div>
          </div>

          <div className="inputAll">
            <div className="inputTop">
              <p className="nameUser">
                <span className="textUser">Nome:</span>
                <input type="text" className="inputUser2" placeholder="Digite seu nome" value={businessName}  onChange={(e) => setNome(e.target.value)}/>
              </p>
              <div className="inputUnder">
                <p className="nameUser">
                  <span className="textUser">Usuario:</span>
                  <input type="text" className="inputUser" placeholder="Digite seu usuário" value={user}  onChange={(e) => setUsuario(e.target.value)}/>
                </p>
                <p className="nameUser">
                  <span className="textUser">Senha:</span>
                  <input type="password" className="inputUser" placeholder="Digite sua senha" value={password}  onChange={(e) => setSenha(e.target.value)}/>
                </p>
                <p className="nameUser">
                  <span className="textUser">Confirmação de Senha:</span>
                  <input type="password" className="inputUser" placeholder="Confirme sua senha" />
                </p>
              </div>
              <div className="inputUnder2">
                <p className="nameUser">
                  <span className="textUser">CPF:</span>
                  <input type="text" className="inputUser" placeholder="Digite seu CPF" value={cpfCnpj}  onChange={(e) => setCpf(e.target.value)}/>
                </p>
                <p className="nameUser">
                  <span className="textUser">Código de Referência:</span>
                  <input type="text" className="inputUser" placeholder="Digite seu código de referência" />
                </p>
                <p className="nameUser">
                  <span className="textUser">Cód Ref Adicional:</span>
                  <input type="text" className="inputUser" placeholder="Digite seu cód ref adicional" />
                </p>
              </div>
            </div>
          </div>

          <div className="inputFooter">
            <div className="footerUnder1">
            <p className="nameUser3">
                <span className="textUser">Telefone:</span>
                <input type="tel" className="inputUser" placeholder="Digite seu número" value={telefone}  onChange={(e) => setTelefone(e.target.value)}/>
              </p>
              <p className="nameUser3">
                <span className="textUser">Endereço Completo:</span>
                <input type="tel" className="inputUser" placeholder="Digite seu número" value={endereco}  onChange={(e) => setEndereco(e.target.value)}/>
              </p>
            </div>
            <div className="footerUnder2">
              <p className="nameUser3">
                <span className="textUser">E-mail:</span>
                <input type="text" className="inputUser" placeholder="Digite seu email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
              </p>
              <p className="nameUser2">
                  <span className="textUser">Tipo:</span>
                  <select className="inputUser">
                    <option value="pessoal">Pessoal</option>
                    <option value="profissional">Profissional</option>
                  </select>
              </p>
            </div>
          </div>
          <button type="submit" className="btn">
          Enviar
          </button>
        </div>
      </form>
    </main>
  );
};

export default User;

"use client";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import BasicTabs from "./AccessibleTabs2";
import { Info, GetInfo } from "./components";

const firebaseConfig = {
  apiKey: `${process.env.firebaseapikey}`,
  authDomain: "residenciafc-5c60b.firebaseapp.com",
  databaseURL: "https://residenciafc-5c60b-default-rtdb.firebaseio.com",
  projectId: "residenciafc-5c60b",
  storageBucket: "residenciafc-5c60b.appspot.com",
  messagingSenderId: "1096555771059",
  appId: "1:1096555771059:web:a2ca85fabc2e54c4e8acc6",
  measurementId: "G-Y17XMC32S0",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const SearchData = () => {
  const [data, setData] = useState(null);
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({});

  const fetchData = async () => {
    const q = query(collection(db, "Persons"), where("cpfCnpj", "==", cpfCnpj));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size > 0) {
      const dataArray = querySnapshot.docs.map((doc) => doc.data());
      setData(dataArray);
    } else {
      alert("Cliente não cadastrado");
      setData(null);
    }
  };
  const handleEditClick = () => {
    setEditing(!editing);
    setEditedData(data[0]); // Preencha com os dados iniciais do cliente a serem editados
  };
  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Fazer o PATCH/atualização no banco de dados usando o editedData
    const personRef = doc(db, "Persons", editedData.id);
    await updateDoc(personRef, editedData);

    // Atualizar o estado data com os novos dados
    setData([editedData]);

    setEditing(false);
  };
  return (
    <div>
      <div className="flex items-center justify-center py-2 px-4 m-7 rounded-xl">
            <form onSubmit={handleSearch}>
                <div className="relative shadow-xl rounded-xl">
                    <input type="text" placeholder="Pesquise o CPF aqui" class="py-2 px-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent hover:ring-2 hover:ring-red-400 hover:border-transparent border border-red-500 w-72 sm:w-96" value={cpfCnpj}
                    onChange={(e) => setCpfCnpj(e.target.value)} />
                    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white rounded-xl py-2 px-4 font-semibold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent" type='submit'
                    >
                        Pesquisar
                    </button>
                </div>
            </form>
    </div> 
       {editing ?  (
               
            <div
            key={editedData.id}
            className="flex min-h-[35vh] w-[94%] flex-col items-left justify-start mt-6 bg-[#f1f1f1] text-black shadow-xl"
          >  
              
                     <div className="flex m-5">
                       {data && (
                         <div>
                           {data.map((item) => (
                             <div
                               key={item.id}
                               className="flex min-h-[35vh] w-[94%] flex-col items-left justify-start mt-6 bg-[#f1f1f1] text-black shadow-xl"
                             >
                               <div className="flex m-5 items-center">
                                 <h1 className="text-gray-600 text-2xl">
                                   Informações do Cliente
                                 </h1>
                                 <button onClick={handleEditClick}>
                                   <svg
                                     xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor"
                                     className="w-6 h-6 ml-4"
                                   >
                                     <path
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                     />
                                   </svg>
                                 </button>
                               </div>
                               <GetInfo/>
                             </div>
                           ))}
                           <BasicTabs />
                         </div>
                       )}
                     </div>
                  </div> 
    
              
          ):(

          
            <div
        key={editedData.id}
        className="flex min-h-[35vh] w-[94%] flex-col items-left justify-start mt-6 bg-[#f1f1f1] text-black shadow-xl"
      >  
          
                 <div className="flex m-5">
                   {data && (
                     <div>
                       {data.map((item) => (
                         <div
                           key={item.id}
                           className="flex min-h-[35vh] w-[94%] flex-col items-left justify-start mt-6 bg-[#f1f1f1] text-black shadow-xl"
                         >
                           <div className="flex m-5 items-center">
                             <h1 className="text-gray-600 text-2xl">
                               Informações do Cliente
                             </h1>
                             <button onClick={handleEditClick}>
                               <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke-width="1.5"
                                 stroke="currentColor"
                                 className="w-6 h-6 ml-4"
                               >
                                 <path
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                 />
                               </svg>
                             </button>
                           </div>
                           <Info
                             businessName={item.businessName}
                             email={item.email}
                             telefone={item.telefone}
                             endereco={item.endereco}
                             cpfCnpj={item.cpfCnpj}
                             dataDeInscricao={item.dataDeInscricao}
                           />
                         </div>
                       ))}
                       <BasicTabs />
                     </div>
                   )}
                 </div>
              </div> 

          )} 

      
    </div>
  );
};

export default SearchData;

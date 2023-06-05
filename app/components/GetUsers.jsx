import React, { useState, useEffect } from "react";
import { Load } from "./components";

export default function GetUsers() {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Adicionado o estado isLoading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.movidesk.com/public/v1/persons?token=${process.env.NEXT_PUBLIC_MOVIDESK_TOKEN}&$filter=profileType eq 2`;

        const res = await fetch(url);
        const data = await res.json();
        setPersons(data);
        setIsLoading(false); // Atualiza o estado para isLoading=false quando os dados forem buscados
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? ( // Verifica se isLoading é verdadeiro
        <Load /> // Renderiza o componente Load se isLoading for verdadeiro
      ) : (
        <ul>
          {persons.map((person) => (
            <li key={person.id}>
              {person.businessName} - {person.emails?.[0]?.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

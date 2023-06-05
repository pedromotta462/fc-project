import React, { useState, useEffect } from "react";

export default function GetUsers() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.movidesk.com/public/v1/persons?token=${process.env.NEXT_PUBLIC_MOVIDESK_TOKEN}&$filter=profileType eq 2`;

        const res = await fetch(url);
        const data = await res.json();
        setPersons(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {persons.map(person => (
          <li key={person.id}>
            {person.businessName} - {person.emails?.[0]?.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";

function GetInfo() {
  return (
    <div className="flex m-5">
      <div className="flex flex-col">
        <div className="flex m-1">
          <p className="text-gray-600">Nome:</p>
          <input className="font-bold ml-4">{}</input>
        </div>
        <div className="flex m-1">
          <p className="text-gray-600">CPF:</p>
          <input className="font-bold ml-4">{}</input>
        </div>

        <div className="flex m-1">
          <p className="text-gray-600">Endereço:</p>
          <input className="font-bold ml-4">{}</input>
        </div>
      </div>
      <div className="flex flex-col ml-20">
        <div className="flex m-1">
          <p className="text-gray-600">Email:</p>
          <input className="font-bold ml-4">{}</input>
        </div>

        <div className="flex m-1">
          <p className="text-gray-600">Telefone:</p>
          <input className="font-bold ml-4">{}</input>
        </div>

        <div className="flex m-1">
          <p className="text-gray-600">Cliente desde:</p>
          <input className="font-bold ml-4">
            {}
          </input>
        </div>
      </div>
    </div>
  );
}

export default GetInfo;

import React from "react";
import placaBronce from '../assets/placa-bronce.svg'

const Placa = ({ nombre, orden, codigo, mes, anio, propiedad }) => {

  return (
    <div className="flex items-center flex-col ">
       <div
        className="relative flex items-center flex-col justify-center w-96 h-96 rounded-full shadow-lg"
        style={{
          backgroundImage: `url(${placaBronce})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >

        <svg className="absolute w-full h-full" viewBox="0 0 200 200">
          {/* Texto superior */}
          <path
            id="textoSuperior"
            d="M 20,100 A 80,80 0 1,1 180,100"
            fill="transparent"
          />
          <text className="font-bold text-black text-[10px] uppercase">
            <textPath href="#textoSuperior" startOffset="50%" textAnchor="middle">
              {nombre || "RAZÓN SOCIAL COMPLETA"}
            </textPath>
          </text>

          {/* 
          d="M 28,100 A 72,72 0 1,1 172,100"
          
          */}
          <path
            id="textoInferior"
            d="M 33,100 A 67,67 0 1,1 167,100"
            
            fill="transparent"
          />
          <text className="font-semibold text-black text-[9px] uppercase">
            <textPath href="#textoInferior" startOffset="50%" textAnchor="middle">
              SE PROHIBE DESTRUIR
            </textPath>
          </text>
        </svg>

        {/* Orden (letra grande) */}
        <div className=" text-center text-6xl font-bold text-black pt-12">
          {orden || "C"}
        </div>

        {/* Triángulo (pendiente agregar) */}
        <div className="mt-20 text-center ">
          
        </div>

        {/* Código */}
        <div className="text-center text-xl font-semibold text-black">
          {codigo || "1000000"}
        </div>

        {/* Mes y Año */}
        <div className="text-center text-xl text-black">
          {mes || "MES"} <br />
          {anio || "2024"}
        </div>

        <svg className="absolute w-full h-full" viewBox="0 0 200 200">
          {/* Texto superior */}
          <path
            id="textoB"
            d="M 20,110 A 80,80 0 0,0 180,110"
            fill="transparent"
          />
          <text className="font-bold text-black text-[10px] uppercase">
            <textPath href="#textoB" startOffset="50%" textAnchor="middle">
              {propiedad || "PROPIEDAD DEL ESTADO"}
            </textPath>
          </text>
        </svg> 
          {/* 
          d="M 28,100 A 72,72 0 1,1 172,100"
          d="M 20,100 A 80,80 0 1,1 180,100"
          */}
          
      </div>
    </div>
  );
};

export default Placa;


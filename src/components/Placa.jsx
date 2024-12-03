import React, { useRef } from "react";
import placaBronce from '../assets/placa-bronce.svg';
import { toJpeg } from "html-to-image";

const Placa = ({ nombre, orden, codigo, mes, anio, propiedad }) => {
  const divRef = useRef(null); // Crear referencia al div que será convertido a imagen

  const handleDownload = () => {
    if (divRef.current) {
      toJpeg(divRef.current, { quality: 0.95 }) // Convertir a imagen en formato JPEG
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "placa.jpg";
          link.click();
        })
        .catch((err) => {
          console.error("Error al generar la imagen:", err);
        });
    }
  };

  return (
    <div>
      {/* A convertir en imagen */}
      <div ref={divRef} className="flex items-center flex-col border p-10 border-neutral-200 rounded-md">
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
            <text className="font-bold text-black text-[11px] uppercase">
              <textPath href="#textoSuperior" startOffset="50%" textAnchor="middle">
                {nombre || "RAZÓN SOCIAL COMPLETA"}
              </textPath>
            </text>
            <path
              id="textoInferior"
              d="M 33,100 A 67,67 0 1,1 167,100"
              fill="transparent"
            />
            <text className="font-normal text-black text-[10px] uppercase">
              <textPath href="#textoInferior" startOffset="50%" textAnchor="middle">
                SE PROHIBE DESTRUIR
              </textPath>
            </text>
          </svg>

          {/* Orden (letra grande) */}
          <div className=" text-center text-6xl font-bold text-black pt-5">
            {orden || "C"}
          </div>

          <div className="mt-20 text-center "> </div>

          {/* Código */}
          <div className="text-center text-[24px] font-semibold text-black">
            {codigo || "1000000"}
          </div>

          {/* Mes y Año */}
          <div className="text-center text-xl text-black">
            {mes || "MES"} <br />
            {anio || "2024"}
          </div>

          <svg className="absolute w-full h-full" viewBox="0 0 200 200">
            <path
              id="textoB"
              d="M 20,110 A 80,80 0 0,0 180,110"
              fill="transparent"
            />
            <text className="font-bold text-black text-[11px] uppercase">
              <textPath href="#textoB" startOffset="50%" textAnchor="middle">
                {propiedad || "PROPIEDAD DEL ESTADO"}
              </textPath>
            </text>
          </svg> 
        </div>
      </div>
      {/* Hasta aquí se convierte en imagen jpg */}

      {/* Botones */}
      <div className="flex items-center m-auto">
        <button
          onClick={handleDownload}
          className="bg-blue-500 text-white p-2 rounded-md mt-2 mr-4 hover:bg-blue-600 transition"
        >
          Descargar en imagen
        </button>
        {/*
        <button className="bg-green-600 text-white p-2 rounded-md mt-2 mr-4 hover:bg-green-800 transition">
          Enviar a WhatsApp
        </button>
        */}
      </div>
    </div>
  );
};

export default Placa;



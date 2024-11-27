import React from "react";

const Placa = ({ nombre, orden, codigo, mes, anio }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex items-center justify-center w-64 h-64 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full shadow-lg">
        {/* Nombre dinámico */}
        <div className="absolute top-4 text-center w-full text-sm font-bold text-black uppercase">
          {nombre || "Municipalidad Provincial de Trujillo"}
        </div>
        {/* Texto fijo */}
        <div className="absolute top-10 text-center text-xs font-medium text-black">
          SE PROHIBE DESTRUIR
        </div>
        {/* Orden (letra grande) */}
        <div className="absolute text-center text-6xl font-bold text-black">
          {orden || "C"}
        </div>
        {/* Triángulo (pendiente agregar) */}
        <div className="absolute mt-20 text-center text-xs text-black">
          ▲ {/* Placeholder para el triángulo */}
        </div>
        {/* Código */}
        <div className="absolute bottom-16 text-center text-xl font-semibold text-black">
          {codigo || "1023538"}
        </div>
        {/* Mes y Año */}
        <div className="absolute bottom-12 text-center text-md text-black">
          {mes || "NOV"} <br />
          {anio || "2024"}
        </div>
        {/* Propiedad del estado */}
        <div className="absolute bottom-4 text-center text-xs text-black">
          PROPIEDAD DEL ESTADO
        </div>
      </div>
    </div>
  );
};

export default Placa;


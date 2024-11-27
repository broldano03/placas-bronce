import React, { useState } from "react";
import Placa from "./Placa";

const FormularioDatos = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    orden: "",
    codigo: "",
    mes: "",
    anio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validaciones específicas para ciertos campos
    if (name === "codigo" && value.length > 7) return;
    if (name === "mes" && value.length > 3) return;
    if (name === "anio" && value.length > 4) return;

    setFormData({
      ...formData,
      [name]: name === "nombre" ? value.toUpperCase() : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 max-w-md mx-auto bg-white shadow-md rounded-lg"
      >
        <h2 className="text-xl font-semibold text-gray-700 text-center">
          Formulario de Datos
        </h2>
        <div className="flex flex-col">
          <label className="text-gray-600 mb-1">Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingrese su nombre"
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-600 mb-1">Orden:</label>
          <select
            name="orden"
            value={formData.orden}
            onChange={handleChange}
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          >
            <option value="">Seleccione</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-600 mb-1">Código:</label>
          <input
            type="number"
            name="codigo"
            value={formData.codigo}
            onChange={handleChange}
            placeholder="7 dígitos"
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-600 mb-1">Mes:</label>
          <input
            type="text"
            name="mes"
            value={formData.mes}
            onChange={handleChange}
            placeholder="3 caracteres"
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-600 mb-1">Año:</label>
          <input
            type="number"
            name="anio"
            value={formData.anio}
            onChange={handleChange}
            placeholder="4 dígitos"
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Enviar
        </button>
      </form>
      {/* Renderizamos el componente Placa con los datos ingresados */}
      <div className="mt-8 flex justify-center">
      <Placa 
        nombre={formData.nombre} 
        orden={formData.orden} 
        codigo={formData.codigo} 
        mes={formData.mes} 
        anio={formData.anio} 
        />
      </div>
    </>
  );
};

export default FormularioDatos;


import React, { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import secciones from "./secciones";

export default function DS160Form() {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({});
  const [completedSections, setCompletedSections] = useState(new Set());
  const [errors, setErrors] = useState({});

  const seccionActual = secciones[currentSection];
  const seccionKey = seccionActual.titulo.toLowerCase();

  const handleInputChange = (seccion, campo, valor) => {
    setFormData((prev) => {
      const updatedSection = {
        ...prev[seccion],
        [campo]: valor,
      };

      setErrors((prevErrors) => ({
        ...prevErrors,
        [campo]: valor.trim() === "" ? "Este campo es obligatorio" : "",
      }));

      const todosLosCamposLlenos = seccionActual.campos.every(
        (c) => updatedSection[c.id]?.trim?.() !== ""
      );

      setCompletedSections((prevCompleted) => {
        const newCompleted = new Set(prevCompleted);
        if (todosLosCamposLlenos) {
          newCompleted.add(seccion);
        } else {
          newCompleted.delete(seccion);
        }
        return newCompleted;
      });

      return {
        ...prev,
        [seccion]: updatedSection,
      };
    });
  };

  const validarSeccionActual = () => {
    const erroresActuales = {};
    let tieneErrores = false;

    seccionActual.campos.forEach((campo) => {
      if (!formData[seccionKey]?.[campo.id]?.trim()) {
        erroresActuales[campo.id] = "Este campo es obligatorio";
        tieneErrores = true;
      }
    });

    setErrors(erroresActuales);
    return !tieneErrores;
  };

  const enviarFormulario = async () => {
    try {
      const response = await fetch("http://localhost:5000/enviar-formulario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Formulario enviado con éxito");
        setFormData({}); // Limpiar formulario
        setCurrentSection(0);
      } else {
        alert("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
    }
  };

  const avanzarSeccion = () => {
    if (validarSeccionActual()) {
      if (currentSection === secciones.length - 1) {
        enviarFormulario(); // Enviar el formulario cuando finaliza
      } else {
        setCurrentSection((prev) => prev + 1);
      }
    }
  };

  const renderCampo = (campo) => {
    const commonClasses =
      "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-amber-500 transition-all duration-200";
    const errorClass = errors[campo.id] ? "border-red-500" : "border-gray-300";

    return (
      <div key={campo.id} className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {campo.label} <span className="text-red-500">*</span>
        </label>
        {campo.tipo === "text" ||
        campo.tipo === "email" ||
        campo.tipo === "tel" ||
        campo.tipo === "date" ? (
          <input
            type={campo.tipo}
            className={`${commonClasses} ${errorClass} hover:border-amber-300`}
            placeholder={campo.label}
            value={formData[seccionKey]?.[campo.id] || ""}
            onChange={(e) =>
              handleInputChange(seccionKey, campo.id, e.target.value)
            }
          />
        ) : campo.tipo === "select" ? (
          <select
            className={`${commonClasses} ${errorClass} hover:border-amber-300 cursor-pointer`}
            value={formData[seccionKey]?.[campo.id] || ""}
            onChange={(e) =>
              handleInputChange(seccionKey, campo.id, e.target.value)
            }
          >
            <option value="">Seleccione una opción</option>
            {campo.opciones?.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        ) : (
          <textarea
            className={`${commonClasses} ${errorClass} hover:border-amber-300 min-h-[100px]`}
            rows="3"
            placeholder={campo.label}
            value={formData[seccionKey]?.[campo.id] || ""}
            onChange={(e) =>
              handleInputChange(seccionKey, campo.id, e.target.value)
            }
          />
        )}
        {errors[campo.id] && (
          <p className="text-red-500 text-sm">{errors[campo.id]}</p>
        )}
      </div>
    );
  };

  const progreso = Math.round(((currentSection + 1) / secciones.length) * 100);
  const seccionCompleta = completedSections.has(seccionKey);

  return (
    <div className="max-w-4xl mx-auto p-4 min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-6 px-8">
          <h1 className="text-3xl font-bold text-center">Formulario DS-160</h1>
        </div>

        <div className="p-6">
          {/* Barra de Progreso */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Progreso
              </span>
              <span className="text-sm font-medium text-amber-600">
                {progreso}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progreso}%` }}
              />
            </div>
          </div>

          {/* Secciones */}
          <div className="flex flex-wrap gap-2 mb-8">
            {secciones.map((seccion, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-default
                ${
                  currentSection === index
                    ? "bg-amber-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <span>{seccion.icono}</span>
                <span>{seccion.titulo}</span>
                {completedSections.has(seccion.titulo.toLowerCase()) && (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                )}
              </div>
            ))}
          </div>

          {/* Contenido de la sección actual */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>{seccionActual.icono}</span>
            {seccionActual.titulo}
          </h2>
          <div className="space-y-6">
            {seccionActual.campos.map(renderCampo)}
          </div>

          {/* Botones de navegación */}
          <div className="flex justify-between mt-8">
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-200"
              onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
              disabled={currentSection === 0}
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-amber-600 text-white hover:bg-amber-700 transition-all duration-200 shadow-md hover:shadow-lg"
              onClick={avanzarSeccion}
            >
              {currentSection === secciones.length - 1
                ? "Finalizar"
                : "Siguiente"}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import {
  Scale,
  GraduationCap,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  X,
  Menu,
  Mail,
  ArrowRight,
  MapPin,
  Phone,
  Facebook,
  Instagram,
} from "lucide-react";

const ImagePopup = ({ image, title, onClose }) => {
  // Cerrar el popup cuando se hace clic en el overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-yellow-500 transition-colors p-2 z-50"
          aria-label="Cerrar imagen"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="p-4 bg-white">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrainingCard = ({ training, onRegister }) => {
  const [showForm, setShowForm] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    profesion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData, training.id);
    setShowForm(false);
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      profesion: "",
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Card Image */}
      <div
        className="relative h-48 overflow-hidden cursor-pointer"
        onClick={() => setShowImage(true)}
      >
        <img
          src={training.imagen}
          alt={training.titulo}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
          <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 text-white font-medium">
            Click para ampliar
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm font-medium">
            {training.categoria}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium">
            {training.modalidad}
          </span>
        </div>
      </div>

      {/* Image Popup */}
      {showImage && (
        <ImagePopup
          image={training.imagen}
          title={training.titulo}
          onClose={() => setShowImage(false)}
        />
      )}

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
          {training.titulo}
        </h3>

        {/* Training Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-yellow-600" />
            <span>Inicio: {training.fecha}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2 text-yellow-600" />
            <span>Duración: {training.duracion}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2 text-yellow-600" />
            <span>Lugar: {training.lugar}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-5 h-5 mr-2 text-yellow-600" />
            <span>Cupos: {training.cupos}</span>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Incluye:</h4>
          <ul className="space-y-2">
            {training.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="w-4 h-4 text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price and Action */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-gray-500 text-sm">Inversión</span>
              <p className="text-2xl font-bold text-gray-900">
                RD${training.precio}
              </p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors inline-flex items-center"
            >
              Inscribirme
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Registration Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full m-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Formulario de Inscripción
              </h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  value={formData.telefono}
                  onChange={(e) =>
                    setFormData({ ...formData, telefono: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profesión
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  value={formData.profesion}
                  onChange={(e) =>
                    setFormData({ ...formData, profesion: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition-colors"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const TrainingsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const trainings = [
    {
      id: 1,
      categoria: "Derecho Migratorio",
      titulo: "Actualización en Regulaciones Migratorias 2024",
      fecha: "15 Marzo 2024",
      duracion: "20 horas",
      modalidad: "Presencial",
      lugar: "Santo Domingo",
      precio: "12,000",
      cupos: "20 participantes",
      imagen: "/api/placeholder/800/400",
      features: [
        "Material didáctico digital",
        "Certificado avalado",
        "Coffee break",
        "Casos prácticos",
        "Networking",
      ],
    },
    {
      id: 2,
      categoria: "Derecho Inmobiliario",
      titulo: "Taller de Contratos Inmobiliarios",
      fecha: "5 Abril 2024",
      duracion: "16 horas",
      modalidad: "Híbrido",
      lugar: "Higüey",
      precio: "15,000",
      cupos: "15 participantes",
      imagen: "/api/placeholder/800/400",
      features: [
        "Templates de contratos",
        "Certificado de participación",
        "Asesoría post-taller",
        "Material impreso",
        "Casos de estudio",
      ],
    },
    {
      id: 3,
      categoria: "Actualización Legal",
      titulo: "Seminario de Derecho Civil y Procesal",
      fecha: "20 Mayo 2024",
      duracion: "12 horas",
      modalidad: "Virtual",
      lugar: "Plataforma Zoom",
      precio: "8,000",
      cupos: "30 participantes",
      imagen: "./img/curso.jpeg",
      features: [
        "Acceso a grabaciones",
        "Material digital",
        "Certificado digital",
        "Foro de consultas",
        "Evaluación final",
      ],
    },
  ];

  const handleRegister = (formData, trainingId) => {
    console.log("Registro para capacitación:", trainingId, formData);
    // Aquí irían las llamadas a la API para procesar el registro
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-yellow-600 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-xl font-bold text-gray-900">
                Lcda. Carol Marte
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-600 hover:text-yellow-600 transition duration-300"
              >
                Inicio
              </a>
              <a
                href="/about"
                className="text-gray-600 hover:text-yellow-600 transition duration-300"
              >
                Sobre nosotros
              </a>
              <a
                href="/services"
                className="text-gray-600 hover:text-yellow-600 transition duration-300"
              >
                Servicios
              </a>
              <button className="bg-yellow-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-700 transition duration-300">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Header */}
      <div className="bg-gray-900 text-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex justify-center mb-8">
            <div className="bg-yellow-600 p-4 rounded-lg">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Capacitaciones Disponibles
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Inscríbete en nuestros programas de formación especializada
          </p>
        </div>
      </div>

      {/* Training Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((training) => (
            <TrainingCard
              key={training.id}
              training={training}
              onRegister={handleRegister}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Scale className="w-8 h-8 text-yellow-600" />
                <span className="text-xl font-bold">Lcda. Carol Marte</span>
              </div>
              <p className="text-gray-400 text-sm">
                Servicios legales profesionales en Higüey y toda la República
                Dominicana. Comprometidos con la excelencia y la satisfacción
                del cliente.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="/servicios"
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="/capacitaciones"
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                  >
                    Capacitaciones
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  <span className="text-gray-400">
                    Calle Principal #123, Higüey, República Dominicana
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  <span className="text-gray-400">+1 (809) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  <span className="text-gray-400">contacto@carolmarte.com</span>
                </div>
              </div>
            </div>

            {/* Social Media & Schedule */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Horario de Atención
              </h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  <div>
                    <p>Lunes a Viernes</p>
                    <p>9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  <div>
                    <p>Sábados</p>
                    <p>9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} Lcda. Carol Marte Abad.
                <span className="block md:inline md:ml-1">
                  Todos los derechos reservados.
                </span>
              </div>
              <div className="flex space-x-6">
                <a
                  href="/privacidad"
                  className="text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Política de Privacidad
                </a>
                <a
                  href="/terminos"
                  className="text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Términos y Condiciones
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrainingsPage;

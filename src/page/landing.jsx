import React, { useState } from "react";
import {
  Scale,
  Book,
  Briefcase,
  Check,
  Building2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Globe2,
  MessageSquare,
  Calendar,
  Award,
  BookOpen,
  UserCheck,
  X,
  MessageCircle,
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  const services = [
    {
      icon: <Globe2 className="w-12 h-12 mb-4 text-yellow-600" />,
      title: "Derecho Migratorio",
      description:
        "Asesoría completa en trámites migratorios, visas y residencia.",
    },
    {
      icon: <Building2 className="w-12 h-12 mb-4 text-yellow-600" />,
      title: "Derecho Inmobiliario",
      description:
        "Compraventa de inmuebles, títulos y registro de propiedades.",
    },
    {
      icon: <Book className="w-12 h-12 mb-4 text-yellow-600" />,
      title: "Asesoría en Contratos",
      description: "Redacción y revisión de contratos, representación legal.",
    },
    {
      icon: <Briefcase className="w-12 h-12 mb-4 text-yellow-600" />,
      title: "Consultoría Empresarial",
      description: "Asesoría integral para empresas y emprendedores.",
    },
  ];

  const testimonials = [
    {
      name: "María González",
      text: "La Licda. Carol me ayudó con todo el proceso de obtención de mi residencia. Su experiencia y profesionalismo fueron excepcionales.",
      role: "Cliente Derecho Migratorio",
    },
    {
      name: "Juan Pérez",
      text: "Excelente asesoría en la compra de mi propiedad. Todo el proceso fue transparente y eficiente.",
      role: "Cliente Derecho Inmobiliario",
    },
    {
      name: "Ana Ramírez",
      text: "Su consultoría empresarial nos ayudó a establecer correctamente nuestra empresa. Altamente recomendada.",
      role: "Cliente Empresarial",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-2">
                <Scale className="w-8 h-8 text-yellow-600" />
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Lcda. Carol Marte
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-600 hover:text-yellow-600 font-medium transition-colors"
              >
                Inicio
              </a>
              <a
                href="/about"
                className="text-gray-600 hover:text-yellow-600 font-medium transition-colors"
              >
                Sobre nosotros
              </a>
              <a
                href="/capacitaciones"
                className="block text-gray-600 hover:text-yellow-600 font-medium transition-colors"
              >
                Capacitaciones
              </a>
              <a
                href="/services"
                className="text-gray-600 hover:text-yellow-600 font-medium transition-colors"
              >
                Servicios
              </a>

              <a
                href="#contacto"
                className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition-colors"
              >
                Contactar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-200">
              <div className="px-4 py-4 space-y-3">
                <a
                  href="/"
                  className="block text-gray-600 hover:text-yellow-600 font-medium transition-colors"
                >
                  Inicio
                </a>
                <a
                  href="/about"
                  className="block text-gray-600 hover:text-yellow-600 font-medium transition-colors"
                >
                  Sobre Nosotros
                </a>
                <a
                  href="/about"
                  className="block text-gray-600 hover:text-yellow-600 font-medium transition-colors"
                >
                  Capacitaciones
                </a>
                <a
                  href="/services"
                  className="block text-gray-600 hover:text-yellow-600 font-medium transition-colors"
                >
                  Servicios
                </a>
                <a
                  href="#contacto"
                  className="block bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition-colors text-center"
                >
                  Contactar
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div id="inicio" className="relative text-white pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("./img/text-legal.jpg")',
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Asesoría Legal Especializada para Resolver tus Problemas Jurídicos
          </h1>
          <p className="text-xl md:text-2xl text-center mb-12 text-gray-200">
            Servicios legales confiables en Higüey y toda la República
            Dominicana
          </p>
          <div className="text-center">
            <a
              href="#contacto"
              className="inline-block bg-yellow-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-yellow-700 transition duration-300"
            >
              Contáctanos Ahora
            </a>
          </div>
        </div>
      </div>

      {/* Sobre Nosotros */}
      <div id="sobre-nosotros" className="py-16 bg-gray-50">
        <div id="sobre-nosotros" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start lg:gap-12">
            {/* Imagen */}
            <div className="flex justify-center lg:justify-start w-full lg:w-1/3">
              <img
                src="../img/carol.jpeg"
                alt="Licda. Carol Marte Abad"
                className="rounded-lg shadow-xl object-cover max-w-xs lg:max-w-sm"
              />
            </div>

            {/* Contenido */}
            <div className="w-full lg:w-2/3 text-center lg:text-left mt-8 lg:mt-0">
              {/* Encabezado Principal */}
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Experiencia y Compromiso a tu Servicio
              </h2>

              {/* Subtítulo */}
              <h3 className="text-2xl font-semibold text-yellow-600 mb-6">
                Licda. Carol Marte Abad
              </h3>

              {/* Descripción */}
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Con más de una década de experiencia en Derecho Migratorio e
                Inmobiliario, me especializo en brindar asesoramiento legal
                integral para clientes que buscan soluciones efectivas,
                confiables y personalizadas. Mi objetivo es convertir desafíos
                legales en oportunidades de crecimiento.
              </p>

              {/* Lista de Servicios */}
              <ul className="space-y-4">
                <li className="flex items-center justify-center lg:justify-start text-gray-700">
                  <Check className="w-5 h-5 text-yellow-600 mr-3" />
                  Asesoramiento en procesos de migración y naturalización
                </li>
                <li className="flex items-center justify-center lg:justify-start text-gray-700">
                  <Check className="w-5 h-5 text-yellow-600 mr-3" />
                  Gestión de contratos y transacciones inmobiliarias
                </li>
                <li className="flex items-center justify-center lg:justify-start text-gray-700">
                  <Check className="w-5 h-5 text-yellow-600 mr-3" />
                  Consultoría legal adaptada a tus necesidades
                </li>
              </ul>

              {/* Llamado a la acción */}
              <div className="mt-8">
                <a
                  href="#contacto"
                  className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Contáctame hoy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Servicios */}
      <div id="servicios" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonios */}
      <div id="testimonios" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contacto */}
      <div
        id="contacto"
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Necesitas Asesoría Legal?
            </h2>
            <p className="text-lg text-gray-600">
              Estamos aquí para ayudarte. Contáctanos para una consulta
              personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                  Envíanos un mensaje
                </h3>
                <p className="text-gray-600 mt-2">
                  Completa el formulario y nos pondremos en contacto contigo
                  pronto
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      className="peer w-full px-4 py-3 rounded-lg border-2 border-gray-200 placeholder-transparent focus:border-yellow-500 focus:outline-none transition-colors"
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                      required
                      placeholder="Nombre completo"
                      id="nombre"
                    />
                    <label
                      htmlFor="nombre"
                      className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all
                               peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                               peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm 
                               peer-focus:text-yellow-600"
                    >
                      Nombre completo
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      className="peer w-full px-4 py-3 rounded-lg border-2 border-gray-200 placeholder-transparent focus:border-yellow-500 focus:outline-none transition-colors"
                      value={formData.telefono}
                      onChange={(e) =>
                        setFormData({ ...formData, telefono: e.target.value })
                      }
                      required
                      placeholder="Teléfono"
                      id="telefono"
                    />
                    <label
                      htmlFor="telefono"
                      className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all
                               peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                               peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm 
                               peer-focus:text-yellow-600"
                    >
                      Teléfono
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    className="peer w-full px-4 py-3 rounded-lg border-2 border-gray-200 placeholder-transparent focus:border-yellow-500 focus:outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    placeholder="Email"
                    id="email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all
                             peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                             peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm 
                             peer-focus:text-yellow-600"
                  >
                    Correo electrónico
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    rows={4}
                    className="peer w-full px-4 py-3 rounded-lg border-2 border-gray-200 placeholder-transparent focus:border-yellow-500 focus:outline-none transition-colors resize-none"
                    value={formData.mensaje}
                    onChange={(e) =>
                      setFormData({ ...formData, mensaje: e.target.value })
                    }
                    required
                    placeholder="Mensaje"
                    id="mensaje"
                  ></textarea>
                  <label
                    htmlFor="mensaje"
                    className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all
                             peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                             peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm 
                             peer-focus:text-yellow-600"
                  >
                    Describe brevemente tu caso
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-6 py-4 rounded-lg font-semibold hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-[1.02] focus:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Enviar Mensaje
                  <Mail className="w-5 h-5" />
                </button>
              </form>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dirección</h4>
                      <p className="text-gray-600 mt-1">
                        Calle Principal #123, <br />
                        Higüey, República Dominicana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Teléfono</h4>
                      <p className="text-gray-600 mt-1">+1 (809) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600 mt-1">
                        contacto@carolmarte.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Horario</h4>
                      <div className="text-gray-600 mt-1">
                        <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                        <p>Sábados: 9:00 AM - 1:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Síguenos en redes sociales
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-yellow-100 p-3 rounded-lg hover:bg-yellow-200 transition-colors"
                    >
                      <Facebook className="w-6 h-6 text-yellow-600" />
                    </a>
                    <a
                      href="https://www.instagram.com/legal_marte/?igsh=MXR1cmNmaTZ2cWJzcQ%3D%3D"
                      className="bg-yellow-100 p-3 rounded-lg hover:bg-yellow-200 transition-colors"
                    >
                      <Instagram className="w-6 h-6 text-yellow-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          {/* Top Footer with Background */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-yellow-600/10"></div>
            <div className="relative px-4 py-16 sm:px-6 lg:px-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Brand Section */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Scale className="w-8 h-8 text-yellow-600" />
                    <span className="text-xl font-bold">Lcda. Carol Marte</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Servicios legales profesionales en Higüey y toda la
                    República Dominicana. Comprometidos con la excelencia y la
                    satisfacción del cliente.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Enlaces Rápidos
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="/"
                        className="text-gray-400 hover:text-yellow-500 transition-colors"
                      >
                        Inicio
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="text-gray-400 hover:text-yellow-500 transition-colors"
                      >
                        Sobre mí
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services"
                        className="text-gray-400 hover:text-yellow-500 transition-colors"
                      >
                        Servicios
                      </a>
                    </li>
                    <li>
                      <a
                        href="#testimonios"
                        className="text-gray-400 hover:text-yellow-500 transition-colors"
                      >
                        Testimonios
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Servicios</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-gray-400">Derecho Migratorio</li>
                    <li className="text-gray-400">Derecho Inmobiliario</li>
                    <li className="text-gray-400">Asesoría en Contratos</li>
                    <li className="text-gray-400">Consultoría Empresarial</li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                  <div className="space-y-4">
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
                      <span className="text-gray-400">
                        contacto@carolmarte.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800">
            <div className="px-4 py-6 sm:px-6 lg:px-8">
              <div className="md:flex md:items-center md:justify-between">
                <div className="text-sm text-gray-400">
                  © 2025 Lcda. Carol Marte Abad. Todos los derechos reservados.
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a
                    href="https://www.instagram.com/legal_marte/?igsh=MXR1cmNmaTZ2cWJzcQ%3D%3D"
                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://l.instagram.com/?u=https%3A%2F%2Fchat.whatsapp.com%2FKzkCuXcCvNNHHFKKO2zZMz%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaYtDSf1GTFuCw35GMLJQ3qNEedZ6hJC7d-LwAbQTcxF1YdmzIxrMTpluTY_aem_qXekJrcHS4mYhuDxqrvhIg&e=AT3cH_wRnAQfgDIhcKjtA11RHXe2g478pXd-CJK6cGnqbJiWpndubQj1g5hTvKGJ3gnjaGklyRoTOD1JvPxOdtRVwFot1WjWBtOCmp0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group overflow-hidden ring-4 ring-white"
        aria-label="Contactar por WhatsApp"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-green-600 to-green-400"></div>
        <MessageCircle className="w-8 h-8 relative z-10 animate-pulse" />
        <div className="absolute -bottom-12 left-0 right-0 bg-black/20 h-24 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      </a>
    </div>
  );
};

export default LandingPage;

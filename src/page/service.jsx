import React, { useState, useEffect } from "react";
import {
  Scale,
  BookOpen,
  Briefcase,
  Building,
  Globe,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  X,
} from "lucide-react";

const ServiceCard = ({ Icon, title, description, features }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:border-yellow-500 transition-colors duration-300">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="bg-gray-50 p-3 rounded-lg">
            <Icon className="w-10 h-10 text-yellow-600" />
          </div>
          <h3 className="text-xl font-bold ml-4 text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        {features && (
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6">
          <a
            href="#contacto"
            className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
          >
            <span>Solicitar este servicio</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mainServices = [
    {
      Icon: Globe,
      title: "Derecho Migratorio",
      description:
        "Asesoría completa en trámites migratorios, visas y residencia.",
      features: [
        "Visas de trabajo y residencia",
        "Naturalización y ciudadanía",
        "Permisos de trabajo",
        "Reunificación familiar",
        "Asesoría en documentación",
      ],
    },
    {
      Icon: Building,
      title: "Derecho Inmobiliario",
      description:
        "Gestión integral de propiedades y transacciones inmobiliarias.",
      features: [
        "Compraventa de inmuebles",
        "Contratos de alquiler",
        "Registro de títulos",
        "Due diligence inmobiliario",
        "Constitución de hipotecas",
      ],
    },
    {
      Icon: BookOpen,
      title: "Asesoría en Contratos",
      description: "Elaboración y revisión de todo tipo de contratos legales.",
      features: [
        "Contratos comerciales",
        "Acuerdos societarios",
        "Contratos laborales",
        "Convenios de confidencialidad",
        "Contratos de servicios",
      ],
    },
    {
      Icon: Briefcase,
      title: "Consultoría Empresarial",
      description:
        "Servicios legales integrales para empresas y emprendedores.",
      features: [
        "Constitución de empresas",
        "Asesoría fiscal",
        "Cumplimiento normativo",
        "Gestión de licencias",
        "Protección de marcas",
      ],
    },
  ];

  const additionalServices = [
    {
      Icon: FileText,
      title: "Derecho Civil",
      description: "Manejo de asuntos civiles y resolución de conflictos.",
    },
    {
      Icon: Users,
      title: "Derecho Familiar",
      description: "Asesoría en temas familiares y sucesorios.",
    },
    {
      Icon: BookOpen,
      title: "Derecho Notarial",
      description: "Servicios notariales y autenticación de documentos.",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/legal_marte",
      Icon: Instagram,
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      Icon: Facebook,
    },
  ];

  const quickLinks = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Nosotros", href: "/about" },
    { name: "Servicios", href: "/services" },
    { name: "Testimonios", href: "#testimonios" },
  ];

  return (
    <div className="min-h-screen bg-white">
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
      {/* Header Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-yellow-600 p-4 rounded-lg">
              <Scale className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
            Nuestros Servicios Legales
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Ofrecemos soluciones legales integrales adaptadas a sus necesidades
            específicas
          </p>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Servicios Adicionales
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Necesita Asesoría Legal?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctenos hoy para discutir su caso y encontrar la mejor solución
            legal
          </p>
          <a
            href="#contacto"
            className="inline-block bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Solicitar Consulta
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Scale className="w-8 h-8 text-yellow-600" />
                <span className="text-xl font-bold">Lcda. Carol Marte</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Servicios legales profesionales en Higüey y toda la República
                Dominicana. Comprometidos con la excelencia y la satisfacción
                del cliente.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                {mainServices.map((service) => (
                  <li
                    key={service.title}
                    className="text-gray-400 text-sm flex items-center space-x-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-600"></div>
                    <span>{service.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-sm group">
                  <MapPin className="w-5 h-5 text-yellow-600 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-400">
                    Calle Principal #123, Higüey, República Dominicana
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm group">
                  <Phone className="w-5 h-5 text-yellow-600 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-400">+1 (809) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm group">
                  <Mail className="w-5 h-5 text-yellow-600 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-400">contacto@carolmarte.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8 mt-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} Lcda. Carol Marte Abad.
                <span className="block md:inline md:ml-1">
                  Todos los derechos reservados.
                </span>
              </div>
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
                  >
                    <span className="sr-only">{social.name}</span>
                    <social.Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;

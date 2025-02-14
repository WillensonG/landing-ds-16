const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white">
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
                href="/capacitaciones"
                className="text-gray-600 hover:text-yellow-600 transition duration-300"
              >
                Capacitaciones
              </a>
              <a
                href="/services"
                className="text-gray-600 hover:text-yellow-600 transition duration-300"
              >
                Servicios
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <img
            src="../img/law1.jpg"
            alt="Legal background"
            className="w-full h-full object-cover object-center opacity-30"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Nuestra Historia
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Más de una década de excelencia legal en Higüey y toda la
              República Dominicana
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Vision & Values */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <img
              src="../img/law2.jpeg"
              alt="Office"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Visión y Valores
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              En nuestro bufete legal, nos dedicamos a proporcionar servicios
              jurídicos de la más alta calidad, combinando experiencia
              profesional con un trato personalizado. Nuestra visión es ser
              líderes en servicios legales, manteniendo siempre los más altos
              estándares éticos y profesionales.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Misión</h3>
                <p className="text-gray-600 text-sm">
                  Brindar soluciones legales efectivas y personalizadas.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Valores</h3>
                <p className="text-gray-600 text-sm">
                  Integridad, excelencia y compromiso con nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          <div className="text-center">
            <svg
              className="w-12 h-12 text-yellow-600 mx-auto mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
            <div className="text-gray-600">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <svg
              className="w-12 h-12 text-yellow-600 mx-auto mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
            </svg>
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Casos Exitosos</div>
          </div>
          <div className="text-center">
            <svg
              className="w-12 h-12 text-yellow-600 mx-auto mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <div className="text-3xl font-bold text-gray-900 mb-2">4</div>
            <div className="text-gray-600">Especializaciones</div>
          </div>
          <div className="text-center">
            <svg
              className="w-12 h-12 text-yellow-600 mx-auto mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <polyline points="16 11 18 13 22 9" />
            </svg>
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">Clientes Satisfechos</div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestro Equipo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Lcda. Carol Marte Abad",
                role: "Abogada Principal",
                description:
                  "Especialista en Derecho Migratorio e Inmobiliario con más de 10 años de experiencia.",
              },
              {
                name: "Lic. Roberto Méndez",
                role: "Abogado Asociado",
                description:
                  "Especializado en Derecho Corporativo y Contratos Comerciales.",
              },
              {
                name: "Lcda. María Sánchez",
                role: "Asesora Legal",
                description:
                  "Experta en Derecho Civil y Procesos de Naturalización.",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src="/api/placeholder/300/300"
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Areas */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Áreas de Práctica
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Derecho Migratorio",
                items: [
                  "Visas y Residencias",
                  "Naturalización",
                  "Permisos de Trabajo",
                  "Reunificación Familiar",
                ],
              },
              {
                title: "Derecho Inmobiliario",
                items: [
                  "Compraventa de Propiedades",
                  "Títulos y Registros",
                  "Contratos de Alquiler",
                  "Desarrollo Inmobiliario",
                ],
              },
              {
                title: "Asesoría Empresarial",
                items: [
                  "Constitución de Empresas",
                  "Contratos Comerciales",
                  "Asesoría Fiscal",
                  "Disputas Corporativas",
                ],
              },
            ].map((area, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <svg
                  className="w-12 h-12 text-yellow-600 mb-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {area.title}
                </h3>
                <ul className="text-gray-600 space-y-2">
                  {area.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestra Ubicación
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
              <img
                src="/api/placeholder/800/600"
                alt="Mapa de ubicación"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <svg
                    className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Dirección
                    </h3>
                    <p className="text-gray-600">
                      Calle Principal #123
                      <br />
                      Higüey, La Altagracia
                      <br />
                      República Dominicana
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Horario de Atención
                  </h3>
                  <p className="text-gray-600">
                    Lunes a Viernes: 9:00 AM - 6:00 PM
                    <br />
                    Sábados: 9:00 AM - 1:00 PM
                  </p>
                </div>
                <button className="bg-yellow-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-yellow-700 transition duration-300">
                  Agenda una Consulta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

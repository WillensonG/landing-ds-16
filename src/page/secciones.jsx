const secciones = [
  {
    titulo: "Información Personal",
    icono: "👤",
    campos: [
      { id: "apellidos", label: "¿Cuáles son sus apellidos?", tipo: "text" },
      { id: "nombres", label: "¿Cuáles son sus nombres?", tipo: "text" },
      { id: "otrosNombres", label: "¿Ha usado otros nombres?", tipo: "text" },
      {
        id: "sexo",
        label: "¿Cuál es su sexo?",
        tipo: "select",
        opciones: ["M", "F"],
      },
      {
        id: "estadoCivil",
        label: "¿Cuál es su estado civil?",
        tipo: "select",
        opciones: ["Soltero/a", "Casado/a", "Divorciado/a", "Viudo/a"],
      },
      {
        id: "fechaNacimiento",
        label: "¿Cuál es su fecha de nacimiento?",
        tipo: "date",
      },
      {
        id: "ciudadNacimiento",
        label: "¿En qué ciudad nació?",
        tipo: "text",
      },
      { id: "paisNacimiento", label: "¿En qué país nació?", tipo: "text" },
    ],
  },
  {
    titulo: "Información Personal 2",
    icono: "📝",
    campos: [
      {
        id: "nacionalidad",
        label: "¿Cuál es su nacionalidad?",
        tipo: "text",
      },
      {
        id: "otraCiudadania",
        label: "¿Tiene o ha tenido otra ciudadanía?",
        tipo: "select",
        opciones: ["Sí", "No"],
      },
      {
        id: "paisNacionalidad",
        label: "¿Cuál es su país de nacionalidad?",
        tipo: "text",
      },
      {
        id: "cedula",
        label: "¿Cuál es su número de identificación nacional (Cédula)?",
        tipo: "text",
      },
    ],
  },
  {
    titulo: "Dirección y Teléfono",
    icono: "📍",
    campos: [
      { id: "direccion", label: "¿Cuál es su dirección?", tipo: "textarea" },
      { id: "provincia", label: "¿En qué provincia vive?", tipo: "text" },
      {
        id: "codigoPostal",
        label: "¿Cuál es su código postal?",
        tipo: "text",
      },
      { id: "pais", label: "¿En qué país vive?", tipo: "text" },
      {
        id: "telefonoHogar",
        label: "¿Cuál es el número de su hogar?",
        tipo: "tel",
      },
      {
        id: "telefonoCelular",
        label: "¿Cuál es su número de celular?",
        tipo: "tel",
      },
      {
        id: "email",
        label: "¿Cuál es su dirección de correo electrónico?",
        tipo: "email",
      },
    ],
  },
  {
    titulo: "Redes Sociales",
    icono: "🌐",
    campos: [
      {
        id: "tieneRedes",
        label: "¿Ha tenido o tiene redes sociales?",
        tipo: "select",
        opciones: ["Sí", "No"],
      },
      { id: "facebook", label: "Usuario en Facebook", tipo: "text" },
      { id: "instagram", label: "Usuario en Instagram", tipo: "text" },
      { id: "tiktok", label: "Usuario en TikTok", tipo: "text" },
    ],
  },
  {
    titulo: "Información del Pasaporte",
    icono: "🛂",
    campos: [
      {
        id: "numeroPasaporte",
        label: "¿Cuál es su número de pasaporte?",
        tipo: "text",
      },
      {
        id: "paisEmision",
        label: "¿Cuál es el país que emitió el pasaporte?",
        tipo: "text",
      },
      {
        id: "lugarEmision",
        label: "¿Dónde fue emitido el pasaporte?",
        tipo: "text",
      },
      {
        id: "fechaEmision",
        label: "¿Cuál es la fecha de emisión del pasaporte?",
        tipo: "date",
      },
      {
        id: "fechaVencimiento",
        label: "¿Cuál es la fecha de vencimiento del pasaporte?",
        tipo: "date",
      },
      {
        id: "pasaportePerdido",
        label: "¿Ha perdido su pasaporte o se lo han robado?",
        tipo: "select",
        opciones: ["Sí", "No"],
      },
    ],
  },
  {
    titulo: "Información de Viaje",
    icono: "✈️",
    campos: [
      {
        id: "esSolicitante",
        label: "¿Es usted el solicitante principal?",
        tipo: "select",
        opciones: ["Sí", "No"],
      },
      {
        id: "diaLlegada",
        label: "¿Cuál es su día previsto de llegada?",
        tipo: "date",
      },
      {
        id: "duracionEstancia",
        label: "¿Cuál es la duración prevista de su estancia?",
        tipo: "text",
      },
      {
        id: "direccionEEUU",
        label: "¿Cuál es la dirección donde se quedará en EE.UU.?",
        tipo: "text",
      },
      { id: "ciudadEEUU", label: "¿En qué ciudad se quedará?", tipo: "text" },
      { id: "estadoEEUU", label: "¿En qué estado se quedará?", tipo: "text" },
    ],
  },
  {
    titulo: "Información de Contacto en EE.UU.",
    icono: "📞",
    campos: [
      {
        id: "contactoNombre",
        label: "¿Cuál es el nombre de la persona de contacto en EE.UU.?",
        tipo: "text",
      },
      {
        id: "relacionContacto",
        label: "¿Cuál es su relación con esta persona?",
        tipo: "text",
      },
      {
        id: "direccionContacto",
        label: "¿Cuál es su dirección en EE.UU.?",
        tipo: "text",
      },
      {
        id: "telefonoContacto",
        label: "¿Cuál es su número de teléfono?",
        tipo: "tel",
      },
    ],
  },
  {
    titulo: "Información Familiar",
    icono: "👨‍👩‍👧‍👦",
    campos: [
      {
        id: "nombrePadre",
        label: "¿Cuál es el nombre completo de su padre?",
        tipo: "text",
      },
      {
        id: "padreEEUU",
        label: "¿Su padre está en EE.UU.?",
        tipo: "select",
        opciones: ["Sí", "No"],
      },
      {
        id: "nombreMadre",
        label: "¿Cuál es el nombre completo de su madre?",
        tipo: "text",
      },
      {
        id: "madreEEUU",
        label: "¿Su madre está en EE.UU.?",
        tipo: "select",
        opciones: ["Sí", "No"],
      },
      {
        id: "otrosParientes",
        label: "¿Tiene otros parientes en EE.UU.?",
        tipo: "select",
        opciones: ["Sí", "No"],
      },
    ],
  },
  {
    titulo: "Información de Empleo",
    icono: "💼",
    campos: [
      {
        id: "ocupacion",
        label: "¿Cuál es su ocupación principal?",
        tipo: "text",
      },
      {
        id: "empleador",
        label: "¿Cuál es el nombre de su empleador o escuela?",
        tipo: "text",
      },
      {
        id: "direccionEmpleo",
        label: "¿Cuál es la dirección de su empleo o escuela?",
        tipo: "text",
      },
      {
        id: "telefonoEmpleo",
        label: "¿Cuál es su número de teléfono laboral?",
        tipo: "tel",
      },
    ],
  },
  {
    titulo: "Educación",
    icono: "🎓",
    campos: [
      {
        id: "institucion",
        label: "¿Cuál es el nombre del instituto educativo?",
        tipo: "text",
      },
      {
        id: "ciudadInstitucion",
        label: "¿En qué ciudad está ubicado?",
        tipo: "text",
      },
      {
        id: "nivelEducacion",
        label: "¿Cuál es su nivel de educación?",
        tipo: "text",
      },
      {
        id: "cursoEstudios",
        label: "¿Cuál fue su curso de estudios?",
        tipo: "text",
      },
    ],
  },
];
export default secciones;

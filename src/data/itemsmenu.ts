
export type MenuItem = {
  texto: string;
  href: string;
  subItems?: MenuItem[];
};
export const ItemMenu: MenuItem[] = [
  {
    texto: "Inicio",
    href: "/",
  },
  {
    texto: "P.E.I",
    href: "#",
    subItems: [
      { texto: "Mision Institucional", href: "/misioninst" },
      { texto: "Vision Educacional", href: "/visionedu" },
    ],
  },
  {
    texto: "Mensaje de Direccion",
    href: "/mensajedire",
  },
  {
    texto: "Equipo Directivo",
    href: "#",
    subItems: [
      { texto: "Direccion", href: "/direccion" },
      { texto: "U.T.P", href: "/U.T.P" },
      { texto: "Inspeccion General", href: "/inspecciongeneral" },
      { texto: "Orientacion", href: "/orientacion" },
      { texto: "Profesores", href: "/profesores" },
    ],
  },
  {
    texto: "Estamento",
    href: "#",
    subItems: [
      { texto: "Convivencia Escolar", href: "/convivencia" },
      { texto: "Equipo Pie", href: "/pie" },
      { texto: "Asistentes De La Educacion", href: "/asistentes" },
      { texto: "Centro de Estudiantes", href: "/centroestudiantes" },
      { texto: "Centro De Padres y Apoderados", href: "/centropadres" },
    ],
  },
  {
    texto: "Documentos",
    href: "#",
    subItems: [
      { texto: "I.T.E.A", href: "/ITEA" },
      { texto: "Reglamento Interno", href: "/reglamento" },
      { texto: "Evaluacion", href: "/evaluacion" },
      { texto: "Protocolos", href: "/protocolo" },
    ],
  },
];
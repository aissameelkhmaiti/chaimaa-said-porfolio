import p1 from "./assets/scrap.png";
import p2 from "./assets/arbic.png";
import p3 from "./assets/dashboard_infographics.png";
import p4 from "./assets/fyp.png";
import p5 from "./assets/oman.png";
import p6 from "./assets/CS.png";

export const filters = [
  { name: "All", id: "all" },
  { name: "Dashboard", id: "dashboard" },
  { name: "Mobile App", id: "mobile-app" },
  { name: "Website", id: "website" },
];

export const projects = [
  {
    name: "Site e-commerce - Packaging personnalisé",
    image: p1,
    tags: ["website"],
    codeLink: "https://github.com/chaimaasaid/ecommerce-packaging", // remplace par vrai lien
  },
  {
    name: "Application Web - Suivi budgétaire BTP",
    image: p2,
    tags: ["dashboard", "website"],
    codeLink: "https://github.com/chaimaasaid/budget-tracking-btp", // remplace par vrai lien
  },
  {
    name: "Dashboard RH - Gestion des employés & congés",
    image: p3,
    tags: ["dashboard"],
    codeLink: "https://github.com/chaimaasaid/dashboard-RH", // remplace si nécessaire
  },
  {
    name: "Application mobile EMSI SmartPresence",
    image: p4,
    tags: ["mobile-app"],
    codeLink: "https://github.com/chaimaasaid/emsi-smartpresence", // projet académique
  },
  {
    name: "Plateforme de Streaming Virtuel (films & séries)",
    image: p5,
    tags: ["website", "dashboard"],
    codeLink: "https://github.com/chaimaasaid/streaming-app", // projet ARK-X
  },
  {
    name: "Client/Serveur - Java JavaFX (Gestion de données)",
    image: p6,
    tags: ["dashboard"],
    codeLink: "https://github.com/chaimaasaid/client-serveur-javafx",
  },
];
export const achievements = [
  {
    id: 1,
    year: 6,
    description: "PROJETS<br />RÉALISÉS",
  },
  {
    id: 2,
    year: 3,
    description: "STAGES<br />EN ENTREPRISE",
  },
  {
    id: 3,
    year: 20,
    description: "TECHNOLOGIES<br />MAÎTRISÉES",
  },
  {
    id: 4,
    year: 4,
    description: "CERTIFICATIONS<br />ET FORMATIONS",
  },
];

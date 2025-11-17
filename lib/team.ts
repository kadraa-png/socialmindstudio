import type { Lang } from "@/lib/i18n";

export type TeamLead = {
  name: string;
  role: Record<Lang, string>;
  note: Record<Lang, string>;
  image: string;
  imageWidth: number;
  imageHeight: number;
};

export const teamLeads: TeamLead[] = [
  {
    name: "Safi",
    role: {
      en: "Founder & Lead Strategist",
      bs: "Osnivač i glavni strateg",
    },
    note: {
      en: "Connects research, paid media, and community-building so launches feel cinematic yet measurable.",
      bs: "Spaja istraživanje, plaćene kanale i zajednicu kako bi lansiranja bila filmska i mjerljiva.",
    },
    image: "/safi.png",
    imageWidth: 379,
    imageHeight: 542,
  },
  {
    name: "Kadra",
    role: {
      en: "Co-founder & Experience Engineer",
      bs: "Suvlasnik i inženjer iskustava",
    },
    note: {
      en: "Architects sleek systems, ensures accessibility, and optimizes every interaction for speed.",
      bs: "Arhitekt elegantnih sistema, osigurava pristupačnost i optimizira svaku interakciju za brzinu.",
    },
    image: "/kadra.jpg",
    imageWidth: 1365,
    imageHeight: 2048,
  },
];

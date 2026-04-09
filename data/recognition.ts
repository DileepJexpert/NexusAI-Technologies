export interface Recognition {
  name: string;
  logo: string;
}

export const recognition: Recognition[] = [
  { name: "Startup India", logo: "/images/recognition/startup-india.svg" },
  { name: "DPIIT", logo: "/images/recognition/dpiit.svg" },
  { name: "IndiaAI", logo: "/images/recognition/indiaai.svg" },
  { name: "Sarvam AI", logo: "/images/recognition/sarvam-ai.svg" },
  { name: "Bhashini", logo: "/images/recognition/bhashini.svg" },
];

export const builtWith: Recognition[] = [
  { name: "Sarvam AI", logo: "/images/recognition/sarvam-ai.svg" },
  { name: "Bhashini", logo: "/images/recognition/bhashini.svg" },
  { name: "LangGraph", logo: "/images/recognition/langgraph.svg" },
  { name: "PostgreSQL", logo: "/images/recognition/postgres.svg" },
  { name: "Cloudflare", logo: "/images/recognition/cloudflare.svg" },
];

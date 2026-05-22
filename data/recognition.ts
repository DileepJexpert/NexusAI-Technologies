export interface Recognition {
  name: string;
  logo: string;
}

export const recognition: Recognition[] = [
  { name: "Startup India", logo: "/images/recognition/startup-india.svg" },
  { name: "DPIIT", logo: "/images/recognition/dpiit.svg" },
  { name: "IndiaAI", logo: "/images/recognition/indiaai.svg" },
];

export const builtWith: Recognition[] = [
  { name: "Cloudflare", logo: "/images/recognition/cloudflare.svg" },
];

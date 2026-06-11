export interface Recognition {
  name: string;
  logo: string;
}

// Add entries here only after the recognition/registration is actually granted.
export const recognition: Recognition[] = [];

export const builtWith: Recognition[] = [
  { name: "Next.js", logo: "" },
  { name: "React", logo: "" },
  { name: "TypeScript", logo: "" },
  { name: "Tailwind CSS", logo: "" },
  { name: "Cloudflare", logo: "" },
  { name: "PostgreSQL", logo: "" },
];

export interface Recognition {
  name: string;
  logo: string;
}

// Add entries here only after the recognition/registration is actually granted.
export const recognition: Recognition[] = [];

export const builtWith: Recognition[] = [
  { name: "Cloudflare", logo: "/images/recognition/cloudflare.svg" },
];

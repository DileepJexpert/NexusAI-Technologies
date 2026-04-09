export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export const team: TeamMember[] = [
  {
    name: "Founder Name",
    role: "Founder & CEO",
    bio: "Former banking professional with expertise in AI and financial technology. Building AI tools that empower every Indian.",
    image: "/images/team/founder.webp",
    linkedin: "",
    twitter: "",
  },
];

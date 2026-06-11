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
    name: "Dileep Maurya",
    role: "Founder",
    bio: "Building Katixo — practical accounting and POS software for Indian MSME and retail businesses.",
    image: "/images/team/founder.webp",
    linkedin: "",
    twitter: "",
  },
];

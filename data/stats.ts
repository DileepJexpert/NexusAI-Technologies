export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export const stats: Stat[] = [
  { label: "Users Helped", value: 5000, suffix: "+" },
  { label: "AI Products", value: 12, suffix: "" },
  { label: "Indian Languages", value: 10, suffix: "+" },
  { label: "Government Schemes", value: 500, suffix: "+" },
];

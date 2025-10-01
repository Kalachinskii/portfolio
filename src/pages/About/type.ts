export interface IIcon {
  name: string;
  icon: string;
  type: "icon" | "image";
}

export interface IeducationsData {
  title: string;
  subtitle: string;
  period: string;
}

export interface IWorksData extends IeducationsData {
  description: string;
  skills?: { name: string; description: string }[];
}

import { create } from "zustand";
import projectsData from "../assets/projects.json";

interface IProject {
  id: number;
  imageUrl: string;
  imageMiniUrl: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    site: string;
    git: string;
  };
}

interface IProjectStore {
  projects: IProject[];
  currentProject: IProject | null;
  setCurrentProject: (projectTitle: string) => void;
  getProjectByTitle: (title: string) => IProject | undefined;
}

export const useProjectStore = create<IProjectStore>((set, get) => ({
  // Инициализируем данными из JSON
  projects: projectsData,

  // Текущий выбранный проект
  currentProject: null,

  // Установить текущий проект по названию
  setCurrentProject: (projectTitle: string) => {
    const project = get().projects.find((p) => p.title === projectTitle);
    set({ currentProject: project || null });
  },

  // Получить проект по названию
  getProjectByTitle: (title: string) => {
    return get().projects.find((p) => p.title === title);
  },
}));

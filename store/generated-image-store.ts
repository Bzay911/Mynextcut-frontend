import { create } from "zustand";

interface GeneratedImageStore {
  generatedImage: string | null;
  setGeneratedImage: (image: string | null) => void;
  clearGeneratedImage: () => void;
}

export const useGeneratedImageStore = create<GeneratedImageStore>((set) => ({
  generatedImage: null,
  setGeneratedImage: (image) => set({ generatedImage: image }),
  clearGeneratedImage: () => set({ generatedImage: null }),
}));
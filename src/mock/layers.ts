export interface Layer {
  id: string;
  name: string;
  visible: boolean;
  color?: string;
  lastModified?: string;
}

export const mockLayers: Layer[] = [
  { id: "1", name: "Walls", visible: true, color: "#ff6b6b", lastModified: new Date().toISOString() },
  { id: "2", name: "Furniture", visible: false, color: "#4dabf7", lastModified: new Date().toISOString() },
  { id: "3", name: "Electrical", visible: true, color: "#ffd166", lastModified: new Date().toISOString() },
  { id: "4", name: "Plumbing", visible: false, color: "#bde0fe", lastModified: new Date().toISOString() }
];

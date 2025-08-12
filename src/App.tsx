import React from "react";
import LayerPanel from "./components/LayerPanel";
import { mockLayers } from "./mock/layers";

export default function App() {
  return (
    <div className="app-root">
      <LayerPanel layers={mockLayers} />
    </div>
  );
}

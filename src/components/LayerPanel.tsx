import React, { useState, useMemo } from "react";
import type { Layer } from "../mock/layers";
import { Eye, EyeOff } from "lucide-react";

type Props = {
  layers: Layer[];
};

export default function LayerPanel({ layers }: Props) {
  const [localLayers, setLocalLayers] = useState<Layer[]>(() =>
    // Clone to keep immutability of incoming prop
    layers.map(l => ({ ...l }))
  );

  const visibleCount = useMemo(
    () => localLayers.filter(l => l.visible).length,
    [localLayers]
  );

  function toggle(id: string) {
    setLocalLayers(prev => prev.map(l => (l.id === id ? { ...l, visible: !l.visible, lastModified: new Date().toISOString() } : l)));
  }

  function setAll(state: boolean) {
    setLocalLayers(prev => prev.map(l => ({ ...l, visible: state, lastModified: new Date().toISOString() })));
  }

  return (
    <aside className="panel" aria-label="Layer visibility panel">
      <header className="panel-header">
        <h2>Layers</h2>
        <div className="meta">{visibleCount} / {localLayers.length} visible</div>
      </header>

      <div className="controls">
        <button onClick={() => setAll(true)} className="btn">Show All</button>
        <button onClick={() => setAll(false)} className="btn btn-ghost">Hide All</button>
      </div>

      <ul className="layer-list">
        {localLayers.map(layer => (
          <li key={layer.id} className="layer-item">
            <div className="layer-left">
              <div
                className="swatch"
                aria-hidden
                style={{ backgroundColor: layer.color || "#ddd" }}
              />
              <div className="layer-name">{layer.name}</div>
            </div>

            <div className="layer-right">
              <button
                aria-pressed={layer.visible}
                aria-label={`${layer.visible ? "Hide" : "Show"} ${layer.name}`}
                onClick={() => toggle(layer.id)}
                className="icon-btn"
              >
                {layer.visible ? <Eye /> : <EyeOff />}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

// LightingControls.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GUI } from 'dat.gui';

export default function LightingControls({ ambientLight, spotLight, pointLight }) {
  useEffect(() => {
    // Create GUI
    const gui = new GUI();

    // Ambient Light
    gui.add(ambientLight, 'intensity', 0, 1, 0.01).name('Ambient Light Intensity');

    // Spot Light
    gui.add(spotLight, 'intensity', 0, 2, 0.01).name('Spot Light Intensity');
    gui.add(spotLight.position, 'x', -20, 20, 0.1).name('Spot Light X');
    gui.add(spotLight.position, 'y', -20, 20, 0.1).name('Spot Light Y');
    gui.add(spotLight.position, 'z', -20, 20, 0.1).name('Spot Light Z');
    gui.add(spotLight, 'angle', 0, Math.PI / 2, 0.01).name('Spot Light Angle');
    gui.add(spotLight, 'penumbra', 0, 1, 0.01).name('Spot Light Penumbra');

    // Point Light
    gui.add(pointLight, 'intensity', 0, 2, 0.01).name('Point Light Intensity');
    gui.add(pointLight.position, 'x', -20, 20, 0.1).name('Point Light X');
    gui.add(pointLight.position, 'y', -20, 20, 0.1).name('Point Light Y');
    gui.add(pointLight.position, 'z', -20, 20, 0.1).name('Point Light Z');

    return () => {
      gui.destroy(); // Cleanup GUI
    };
  }, [ambientLight, spotLight, pointLight]);

  return null;
}

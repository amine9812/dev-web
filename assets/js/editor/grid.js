import { state } from '../core/state.js';

export const buildGrid = (gridEl) => {
  gridEl.innerHTML = '';
  gridEl.classList.toggle('gridlines', state.gridlines);
  const cellSize = 20;
  gridEl.style.width = `${state.size * cellSize}px`;
  gridEl.style.height = `${state.size * cellSize}px`;
  gridEl.style.gridTemplateColumns = `repeat(${state.size}, ${cellSize}px)`;
  gridEl.style.gridTemplateRows = `repeat(${state.size}, ${cellSize}px)`;
  const frag = document.createDocumentFragment();
  for (let y = 0; y < state.size; y++) {
    for (let x = 0; x < state.size; x++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.x = x;
      cell.dataset.y = y;
      frag.appendChild(cell);
    }
  }
  gridEl.appendChild(frag);
};

export const paintCell = (gridEl, x, y, color) => {
  const cell = gridEl.querySelector(`[data-x="${x}"][data-y="${y}"]`);
  if (cell) {
    cell.style.backgroundColor = color || 'transparent';
  }
};

export const paintAll = (gridEl, pixels) => {
  const cells = gridEl.querySelectorAll('.cell');
  cells.forEach((cell) => {
    const x = Number(cell.dataset.x);
    const y = Number(cell.dataset.y);
    const color = pixels[y]?.[x] || null;
    cell.style.backgroundColor = color || 'transparent';
  });
};

export const toggleGridlines = (gridEl, enabled) => {
  gridEl.classList.toggle('gridlines', enabled);
};

export const getCoords = (target) => ({
  x: Number(target.dataset.x),
  y: Number(target.dataset.y),
});

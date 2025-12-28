const LIMIT = 40;
let undoStack = [];
let redoStack = [];

export const initHistory = (pixels) => {
  undoStack = [clonePixelsFrom(pixels)];
  redoStack = [];
};

export const pushHistory = (pixels) => {
  undoStack.push(clonePixelsFrom(pixels));
  if (undoStack.length > LIMIT) undoStack.shift();
  redoStack = [];
};

export const undo = () => {
  if (undoStack.length <= 1) return null;
  const current = undoStack.pop();
  redoStack.push(current);
  return clonePixelsFrom(undoStack[undoStack.length - 1]);
};

export const redo = () => {
  if (!redoStack.length) return null;
  const next = redoStack.pop();
  undoStack.push(next);
  return clonePixelsFrom(next);
};

export const clearHistory = () => {
  undoStack = [];
  redoStack = [];
};

export const getHistoryState = () => ({
  undo: undoStack.length,
  redo: redoStack.length,
});

const clonePixelsFrom = (pixels) => pixels.map((row) => [...row]);

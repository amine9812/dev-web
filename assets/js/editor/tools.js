import * as pencil from './tool-pencil.js';
import * as eraser from './tool-eraser.js';
import * as bucket from './tool-bucket.js';
import * as eyedropper from './tool-eyedropper.js';
import * as line from './tool-line.js';
import * as rectangle from './tool-rectangle.js';

const registry = {
  pencil,
  eraser,
  bucket,
  eyedropper,
  line,
  rectangle,
};

export const getTool = (name) => registry[name] || registry.pencil;

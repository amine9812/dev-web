export const qs = (sel, scope = document) => scope.querySelector(sel);
export const qsa = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));
export const create = (tag, opts = {}) => Object.assign(document.createElement(tag), opts);

export const delegate = (el, selector, type, handler) => {
  el.addEventListener(type, (event) => {
    const target = event.target.closest(selector);
    if (target && el.contains(target)) {
      handler(event, target);
    }
  });
};

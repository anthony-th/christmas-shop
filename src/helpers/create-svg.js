const createSvg = (svgRaw, classes = [], attributes = {}) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgRaw, 'image/svg+xml');
  const svgElement = document.importNode(doc.documentElement, true);

  if (classes.length > 0) {
    svgElement.classList.add(...classes);
  }

  for (const [key, value] of Object.entries(attributes)) {
    svgElement.setAttribute(key, value);
  }

  return svgElement;
};

export default createSvg;

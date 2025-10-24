const createElement = (tag, classes = [], textContent = '', attributes = {}) => {
  const element = document.createElement(tag);

  if (classes.length > 0) element.classList.add(...classes);

  if (textContent) {
    element.textContent = textContent;
  }

  for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
  }

  return element;
}

export default createElement;
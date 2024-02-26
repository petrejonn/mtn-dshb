import "./input.css";

export const createInput = ({
  primary = false,
  size = "medium",
  backgroundColor = "whitesmoke",
  label,
  onChange,
}) => {
  const inp = document.createElement("input");
  inp.type = "text";
  inp.placeholder = "Input";
  inp.addEventListener("change", onChange);

  inp.className = `storybook-button--${size}`;

  inp.style.backgroundColor = backgroundColor;

  return inp;
};

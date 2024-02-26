import "./forminput.css";
import { createInput } from "../input/input";

export const createForm = ({
  primary = false,
  size,
  backgroundColor = "white",
  label,
  onChange,
  userName = "Device Username",
}) => {
  const form = document.createElement("form");
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  const wrap = `
   <div class='story-wrap'>
    <label>${userName}</label>
    <input 
    type='text' 
    class=${["storybook-form", `storybook-form--${size}, ${mode}`].join(" ")}
    placeholder="eg.Johnrouter" 
    >
</div>
`;

  form.insertAdjacentHTML("afterbegin", wrap);

  return form;
};

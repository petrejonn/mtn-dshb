import "./forminput.css";
import { createInput } from "../input/input";

export const createForm = ({
  primary = false,
  size = "medium",
  backgroundColor = "white",
  label,
  onChange,
  userName = "Device Username",
}) => {
  const form = document.createElement("form");
  const wrap = `
   <div class='story-wrap'>
  <div>
    <label>${userName}</label>
    <input 
    type='text' 
    class=${["storybook-form", `storybook-form--${size}`].join(" ")}
    placeholder="eg.Johnrouter" 
    >
  </div>
</div>
`;

  form.insertAdjacentHTML("afterbegin", wrap);

  return form;
};
/**const wrap = document.createElement("div");
wrap.className = " story-wrap";
const parent = document.createElement("div");
const deviceUsername = `<span>${userName}</span>`;
parent.innerHTML = deviceUsername;
parent.className = ["storybook-form", `storybook-form--${size}`].join("");
parent.appendChild(
  createInput({
    size: size,
    primary: primary,
    backgroundColor: backgroundColor,
  })
);
wrap.appendChild(parent);*/

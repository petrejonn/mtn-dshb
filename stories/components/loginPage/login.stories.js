import { createLogin } from "./login";

export default {
  title: "Login",
  render: ({ label, ...args }) => {
    return createLogin({ label, ...args });
  },
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    onChange: { action: "onChange" },
    primary: { control: "boolean" },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
  },
};
export const Primary = {
  args: {
    primary: true,
    size: "medium",
    label: "Input",
  },
};

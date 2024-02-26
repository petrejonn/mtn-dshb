import { createForm } from "./Forminput";

export default {
  title: "Forminput",
  component: createForm,
  render: ({ label, ...args }) => {
    return createForm({ label, ...args });
  },
  parameters: {
    layout: "fullscreen",
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

export const Large = {
  args: {
    size: "large",
    label: "Input",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Input",
  },
};

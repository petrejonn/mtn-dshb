import { createInput } from "./input";

export default {
  title: "Input",
  render: ({ label, ...args }) => {
    return createInput({ label, ...args });
  },
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    onChange: { action: "onChange" },
    primary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};
export const Primary = {
  args: {
    primary: true,
    label: "Input",
  },
};

export const medium = {
  args: {
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

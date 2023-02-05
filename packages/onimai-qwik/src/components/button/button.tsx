import { component$, Slot } from "@builder.io/qwik";

type Props = {
  variant?: "default" | "danger" | "subtle" | "outline" | "ghost" | "link";
  size?: "default" | "small" | "large";
};

export const variantClass = {
  default: "",
  danger: "btn-danger",
  subtle: "btn-subtle",
  outline: "btn-outline",
  ghost: "btn-ghost",
  link: "btn-link",
};

export const sizeClass = {
  default: "",
  small: "btn-sm",
  large: "btn-lg",
};

export const Button = component$((props: Props) => {
  const variant = variantClass[props.variant || "default"];
  const size = sizeClass[props.size || "default"];

  return (
    <button class={`btn ${variant} ${size}`}>
      <Slot />
    </button>
  );
});

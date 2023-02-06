import { component$, Slot } from "@builder.io/qwik";

type Props = {
  trigger?: "focus" | "hover";
  direction?:
    | "left"
    | "left-top"
    | "left-bottom"
    | "right"
    | "right-top"
    | "right-bottom"
    | "top"
    | "top-left"
    | "top-right"
    | "bottom"
    | "bottom-left"
    | "bottom-right";
  class?: string;
};

export const triggerClass = {
  focus: "popover-focus",
  hover: "popover-hover",
};

export const directionClass = {
  left: "popover-left",
  "left-top": "popover-left-top",
  "left-bottom": "popover-left-bottom",
  right: "popover-right",
  "right-top": "popover-right-top",
  "right-bottom": "popover-right-bottom",
  top: "popover-top",
  "top-left": "popover-top-left",
  "top-right": "popover-top-right",
  bottom: "popover-bottom",
  "bottom-left": "popover-bottom-left",
  "bottom-right": "popover-bottom-right",
};

export const Popover = component$((props: Props) => {
  const trigger = triggerClass[props.trigger || "focus"];
  const direction = directionClass[props.direction || "bottom-right"];

  return (
    <div class={`popover not-prose ${trigger}`}>
      <Slot name="trigger" />
      <div class={`popover-content ${direction} ${props.class}`}>
        <Slot />
      </div>
    </div>
  );
});

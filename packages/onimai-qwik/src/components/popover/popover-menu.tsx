import { component$, Slot } from "@builder.io/qwik";
import { ChevronRight } from "../../icons/chevron-right";

type Props = {
  class?: string;
};

export const PopoverMenu = component$((props: Props) => {
  return (
    <div class="popover popover-hover menu-item">
      <Slot name="trigger" />
      <div class={`popover-right-bottom popover-content -ml-2 ${props.class}`}>
        <Slot />
      </div>
      <ChevronRight class="menu-icon-right" />
    </div>
  );
});

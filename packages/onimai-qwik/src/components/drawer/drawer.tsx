import { component$, Slot } from "@builder.io/qwik";

type Props = {
  /**
   * Unique id for toggle checkbox
   */
  id: string;
  /**
   * Where to show drawer
   *
   * @default right
   */
  direction?: "left" | "right";
  /**
   * Weather drawer can be closed by clicking background
   *
   * @default true
   */
  closable?: boolean;
  /**
   * Extra class for `.drawer-content`.
   */
  class?: string;
};

export const directionClass = {
  left: "drawer-left",
  right: "drawer-right",
};

export const Drawer = component$((props: Props) => {
  const direction = directionClass[props.direction || "right"];
  const closable = props.closable ?? true;

  return (
    <>
      <input type="checkbox" class="drawer-toggle" hidden id={props.id} />
      <div class={`drawer ${direction}`}>
        {closable ? (
          <label for={props.id} class="drawer-background"></label>
        ) : (
          <div class="drawer-background"></div>
        )}
        <div class={`drawer-content ${props.class || ""}`}>
          <Slot />
        </div>
      </div>
    </>
  );
});

import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";

import style from "./modal.css?inline";

interface Props {
  /**
   * id property for checkbox element, should be globally unique.
   */
  id: string;
}

/**
 * Modal component
 *
 * Use `<label for="id">click</label>` to open it.
 */
export const Modal = component$((props: Props) => {
  useStylesScoped$(style);

  return (
    <>
      <input type="checkbox" class="toggle" hidden id={props.id} checked />
      <div class="modal">
        <label class="background" for={props.id} />
        <div class="content">
          <Slot />
          <div class="actions">
            <Slot name="action" />
          </div>
        </div>
      </div>
    </>
  );
});

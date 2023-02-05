import { component$, Slot } from "@builder.io/qwik";
import { Close } from "./close";

type Props = {
  /**
   * Unique id for toggle checkbox.
   */
  id: string;
  /**
   * Weather it can be closed via click background or top-right close button
   *
   * @default true
   */
  closable?: boolean;
};

export const Modal = component$((props: Props) => {
  return (
    <>
      <input type="checkbox" class="modal-toggle" id={props.id} hidden />
      <div class="modal">
        {props.closable !== false ? (
          <label class="modal-background" for={props.id}></label>
        ) : (
          <div class="modal-background"></div>
        )}
        <div class="modal-content">
          {props.closable !== false && (
            <label class="modal-close" tabIndex={0} for={props.id}>
              <Close class="w-4 h-4" />
            </label>
          )}
          <Slot />
          <div class="modal-actions">
            <Slot name="action" />
          </div>
        </div>
      </div>
    </>
  );
});

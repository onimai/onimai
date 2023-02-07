import { component$, Slot, useContext } from "@builder.io/qwik";
import { TabsContext } from "./tabs";

type Props = {
  id: string;
  disabled?: boolean;
  checked?: boolean;
};

export const TabsItem = component$((props: Props) => {
  const { name } = useContext(TabsContext);

  return (
    <>
      <input
        type="radio"
        name={name}
        id={props.id}
        hidden
        disabled={props.disabled ?? false}
        checked={props.checked ?? false}
      />
      <label for={props.id} class="tabs-item">
        <Slot />
      </label>
    </>
  );
});

import {
  component$,
  createContext,
  Slot,
  useContextProvider,
} from "@builder.io/qwik";

export const TabsContext = createContext<{ name: string }>("Tabs");

type Props = {
  name: string;
};

export const Tabs = component$((props: Props) => {
  useContextProvider(TabsContext, { name: props.name });

  return (
    <div class="tabs">
      <div class="tabs-trigger">
        <Slot name="trigger" />
      </div>
      <div class="tabs-panel">
        <Slot />
      </div>
    </div>
  );
});

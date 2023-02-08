import { component$, Slot } from "@builder.io/qwik";

export const Preview = component$(() => {
  return (
    <div class="not-prose my-4 flex min-h-[16rem] w-full items-center justify-center rounded-md border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
      <Slot />
    </div>
  );
});

import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <article class="prose p-8">
      <Slot />
    </article>
  );
});

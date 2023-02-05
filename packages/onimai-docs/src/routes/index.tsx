import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="p-4 flex gap-4">
      <button class="btn">DEFAULT</button>
      <button class="btn btn-danger">DANGER</button>
      <button class="btn btn-outline">OUTLINE</button>
      <button class="btn btn-subtle">SUBTLE</button>
      <button class="btn btn-ghost">GHOST</button>
      <button class="btn btn-link">LINK</button>

      <Link class="btn" href="/docs/get-start">
        Get Start
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

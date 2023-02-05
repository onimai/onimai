import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";

import { Modal } from "@onimai/qwik";

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

      <label for="hello" class="btn">
        Hello
      </label>

      <Modal id="hello">
        <h2 class="text-2xl font-bold">Settings</h2>
        <p class="opacity-60">Are you sure to remove all your settings?</p>

        <button class="btn btn-danger" q:slot="action">
          Yes
        </button>
        <label class="btn" for="hello" q:slot="action">
          No
        </label>
      </Modal>
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

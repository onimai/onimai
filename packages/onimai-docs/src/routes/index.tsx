import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";

import { Modal } from "@onimai/qwik";

export default component$(() => {
  return (
    <div class="p-4 flex gap-4">
      <Link class="btn btn-link" href="/docs/get-start">
        Get Start
      </Link>
      <Link class="btn btn-link" href="/docs/button">
        Buttons
      </Link>
      <Link class="btn btn-link" href="/docs/modal">
        Modals
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

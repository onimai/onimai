import { component$, useStyles$ } from "@builder.io/qwik";
import { Modal } from "./components/modal/modal";

import globalStyle from "./global.css?inline";
import indexStyle from "./index.css?inline";

export default component$(() => {
  useStyles$(globalStyle);
  useStyles$(indexStyle);

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <label class="btn" for="makelove">
          click!!!
        </label>

        <Modal id="makelove">
          <h2 class="text-xl font-bold">Do you want to make love with me?</h2>
          <p class="opacity-60">This is dangerous</p>

          <button class="btn" q:slot="action">
            YES
          </button>
          <label
            class="btn btn-subtle"
            for="makelove"
            tabIndex={0}
            q:slot="action"
          >
            CLOSE
          </label>
        </Modal>
      </body>
    </>
  );
});

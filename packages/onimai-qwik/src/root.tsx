import { component$, useStyles$ } from "@builder.io/qwik";
import { Drawer } from "./components/drawer/drawer";
import { Modal } from "./components/modal/modal";

import style from "./global.css?inline";

export default component$(() => {
  useStyles$(style);

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <label for="hello" class="btn" tabIndex={0}>
          Modal
        </label>

        <Modal id="hello">
          <h2 class="text-2xl font-bold">Hello world</h2>
          <p class="opacity-60">Include stdio.h</p>

          <label
            class="btn btn-subtle"
            for="hello"
            tabIndex={0}
            q:slot="action"
          >
            No
          </label>
          <button class="btn" q:slot="action">
            Yes
          </button>
        </Modal>

        <label for="world" class="btn" tabIndex={0}>
          Drawer
        </label>

        <Drawer id="world" class="p-4 w-96">
          <h2 class="text-2xl font-bold">Hello world</h2>
          <p class="opacity-60">Include stdio.h</p>
        </Drawer>

        <div class="max-w-sm">
          <input type="text" class="input" placeholder="Text..."></input>
          <input type="email" class="input" placeholder="Email..."></input>
          <input type="color" class="input" placeholder="Color..."></input>
          <input type="date" class="input" placeholder="Date..."></input>
          <input
            type="datetime-local"
            class="input"
            placeholder="Datetime Local..."
          ></input>
          <input type="file" class="input" placeholder="File..."></input>
          <input type="image" class="input" placeholder="Image..."></input>
          <input type="month" class="input" placeholder="Month..."></input>
          <input type="number" class="input" placeholder="Number..."></input>
          <input
            type="password"
            class="input"
            placeholder="Password..."
          ></input>
          <input type="search" class="input" placeholder="Search..."></input>
        </div>
      </body>
    </>
  );
});

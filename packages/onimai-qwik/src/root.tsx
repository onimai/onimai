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
      <body class="p-8">
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

        <details>
          <summary>Inputs</summary>
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
        </details>

        <details>
          <summary>Popovers</summary>
          <div class="flex gap-4 flex-wrap">
            <div class="popover popover-focus">
              <button class="btn">Right</button>
              <div class="popover-content popover-right w-32 p-4">
                hello world
              </div>
            </div>
            <div class="popover popover-focus">
              <button class="btn">Right Top</button>
              <div class="popover-content popover-right-top w-32 p-4">
                hello world
              </div>
            </div>
            <div class="popover popover-focus">
              <button class="btn">Right Bottom</button>
              <div class="popover-content popover-right-bottom w-32 p-4">
                hello world
              </div>
            </div>

            <div class="popover popover-focus">
              <button class="btn">Left</button>
              <div class="popover-content popover-left w-32 p-4">
                hello world
              </div>
            </div>
            <div class="popover popover-focus">
              <button class="btn">Left Top</button>
              <div class="popover-content popover-left-top w-32 p-4">
                hello world
              </div>
            </div>
            <div class="popover popover-focus">
              <button class="btn">Left Bottom</button>
              <div class="popover-content popover-left-bottom w-32 p-4">
                hello world
              </div>
            </div>

            <div class="popover popover-focus">
              <button class="btn">Top</button>
              <div class="popover-content popover-top w-32 p-4">
                hello world
              </div>
            </div>
            <div class="popover popover-focus">
              <button class="btn">Top Left</button>
              <div class="popover-content popover-top-left w-32 p-4">
                hello world
              </div>
            </div>
            <div class="popover popover-focus">
              <button class="btn">Top Right</button>
              <div class="popover-content popover-top-right w-32 p-4">
                hello world
              </div>
            </div>

            <div class="popover popover-focus">
              <button class="btn">Bottom</button>
              <div class="popover-content popover-bottom w-32 p-4">
                hello world
              </div>
            </div>
            <div class="popover popover-focus">
              <button class="btn">Bottom Left</button>
              <div class="popover-content popover-bottom-left w-32 p-4">
                hello world
              </div>
            </div>
            <div class="popover popover-focus">
              <button class="btn">Bottom Right</button>
              <div class="popover-content popover-bottom-right w-32 p-4">
                hello world
              </div>
            </div>

            <div class="popover popover-focus">
              <input class="input" placeholder="focus"></input>
              <div class="popover-content popover-bottom w-32 p-4">
                hello world
              </div>
            </div>
            <div class="popover popover-hover">
              <input class="input" placeholder="hover"></input>
              <div class="popover-content popover-bottom w-32 p-4">
                hello world
              </div>
            </div>
          </div>
        </details>
      </body>
    </>
  );
});

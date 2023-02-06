import { component$, useStyles$ } from "@builder.io/qwik";
import { Button } from "./components/button/button";
import { Drawer } from "./components/drawer/drawer";
import { Modal } from "./components/modal/modal";
import { Popover } from "./components/popover/popover";

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
        <details>
          <summary>Modals</summary>

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
        </details>

        <details>
          <summary>Drawers</summary>

          <label for="world" class="btn" tabIndex={0}>
            Drawer
          </label>

          <Drawer id="world" class="p-4 w-96">
            <h2 class="text-2xl font-bold">Hello world</h2>
            <p class="opacity-60">Include stdio.h</p>
          </Drawer>
        </details>

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
            <Popover direction="right" class="w-64 p-4">
              <Button q:slot="trigger">Right</Button>
              This is right popover
            </Popover>
            <Popover direction="right-top" class="w-64 p-4">
              <Button q:slot="trigger">Right Top</Button>
              This is right top popover
            </Popover>
            <Popover direction="right-bottom" class="w-64 p-4">
              <Button q:slot="trigger">Right Bottom</Button>
              This is right bottom popover
            </Popover>

            <Popover direction="left" class="w-64 p-4">
              <Button q:slot="trigger">Left</Button>
              This is left popover
            </Popover>
            <Popover direction="left-top" class="w-64 p-4">
              <Button q:slot="trigger">Left Top</Button>
              This is left top popover
            </Popover>
            <Popover direction="left-bottom" class="w-64 p-4">
              <Button q:slot="trigger">Left Bottom</Button>
              This is left bottom popover
            </Popover>

            <Popover direction="top" class="w-64 p-4">
              <Button q:slot="trigger">Top</Button>
              This is top popover
            </Popover>
            <Popover direction="top-left" class="w-64 p-4">
              <Button q:slot="trigger">Top Left</Button>
              This is top left popover
            </Popover>
            <Popover direction="top-right" class="w-64 p-4">
              <Button q:slot="trigger">Top Right</Button>
              This is top right popover
            </Popover>

            <Popover direction="bottom" class="w-64 p-4">
              <Button q:slot="trigger">Bottom</Button>
              This is bottom popover
            </Popover>
            <Popover direction="bottom-left" class="w-64 p-4">
              <Button q:slot="trigger">Bottom Left</Button>
              This is bottom left popover
            </Popover>
            <Popover direction="bottom-right" class="w-64 p-4">
              <Button q:slot="trigger">Bottom Right</Button>
              This is bottom right popover
            </Popover>

            <Popover direction="bottom" class="w-64 p-4">
              <input
                class="input w-64"
                placeholder="Focus..."
                q:slot="trigger"
              />
              Anything focus can trigger
            </Popover>

            <Popover trigger="hover" direction="bottom" class="w-64 p-4">
              <input
                class="input w-64"
                placeholder="Hover..."
                q:slot="trigger"
              />
              Anything hover can trigger
            </Popover>
          </div>
        </details>

        <details>
          <summary>Checkbox</summary>
          <label class="flex items-center gap-4">
            <input type="checkbox" class="checkbox" />
            <span>Yes you are right</span>
          </label>
        </details>
      </body>
    </>
  );
});

import { component$, useStyles$ } from "@builder.io/qwik";
import { Drawer } from "./components/drawer/drawer";
import { PopoverMenu } from "./components/popover/popover-menu";
import { Modal } from "./components/modal/modal";
import { Popover } from "./components/popover/popover";
import { Tabs } from "./components/tabs/tabs";
import { TabsItem } from "./components/tabs/tabs-item";

import style from "./global.css?inline";
import { BellAlert } from "./icons/bell-alert";
import { BellSlash } from "./icons/bell-slash";
import { Close } from "./icons/close";

export default component$(() => {
  useStyles$(style);

  const haskell = `main :: IO ()\nmain = putStrLn . show . sum . map read . words =<< getLine`;

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
              class="btn-subtle btn"
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

          <Drawer id="world" class="w-96 p-4">
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
          <div class="flex flex-wrap gap-4">
            <Popover direction="right" class="w-64 p-4">
              <button class="btn" q:slot="trigger">
                Right
              </button>
              This is right popover
            </Popover>
            <Popover direction="right-top" class="w-64 p-4">
              <button class="btn" q:slot="trigger">
                Right Top
              </button>
              This is right top popover
            </Popover>
            <Popover direction="right-bottom" class="w-64 p-4">
              <button class="btn" q:slot="trigger">
                Right Bottom
              </button>
              This is right bottom popover
            </Popover>

            <Popover direction="left" class="w-64 p-4">
              <button class="btn" q:slot="trigger">
                Left
              </button>
              This is left popover
            </Popover>
            <Popover direction="left-top" class="w-64 p-4">
              <button class="btn" q:slot="trigger">
                Left Top
              </button>
              This is left top popover
            </Popover>
            <Popover direction="left-bottom" class="w-64 p-4">
              <button class="btn" q:slot="trigger">
                Left Bottom
              </button>
              This is left bottom popover
            </Popover>

            <Popover direction="top" class="w-64 p-4">
              <button class="btn" q:slot="trigger">
                Top
              </button>
              This is top popover
            </Popover>
            <Popover direction="top-left" class="w-64 p-4">
              <button class="btn" q:slot="trigger">
                Top Left
              </button>
              This is top left popover
            </Popover>
            <Popover direction="top-right" class="w-64 p-4">
              <button class="btn" q:slot="trigger">
                Top Right
              </button>
              This is top right popover
            </Popover>

            <Popover direction="bottom" class="w-64 p-4">
              <button class="btn" q:slot="trigger">
                Bottom
              </button>
              This is bottom popover
            </Popover>
            <Popover direction="bottom-left" class="w-64 p-4">
              <button class="btn" q:slot="trigger">
                Bottom Left
              </button>
              This is bottom left popover
            </Popover>
            <Popover direction="bottom-right" class="w-64 p-4">
              <button class="btn" q:slot="trigger">
                Bottom Right
              </button>
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

        <details>
          <summary>Radio</summary>
          <div>
            <label class="flex items-center gap-4">
              <input type="radio" name="rajio" class="radio" />
              <span>Mahiro</span>
            </label>
            <label class="flex items-center gap-4">
              <input type="radio" name="rajio" class="radio" />
              <span>Mihari</span>
            </label>
            <label class="flex items-center gap-4">
              <input type="radio" name="rajio" class="radio" />
              <span>Kaede</span>
            </label>
            <label class="flex items-center gap-4">
              <input type="radio" name="rajio" class="radio" />
              <span>Momiji</span>
            </label>
          </div>
        </details>

        <details>
          <summary>Typography</summary>
          <article class="prose">
            <h1>Heading One</h1>
            <h2>Heading Two</h2>
            <p>Lorem ipsum, bala bala</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Sex</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mahiro</td>
                  <td>Male</td>
                  <td>???</td>
                </tr>
                <tr>
                  <td>Mihari</td>
                  <td>Female</td>
                  <td>???</td>
                </tr>
                <tr>
                  <td>Kaede</td>
                  <td>Female</td>
                  <td>???</td>
                </tr>
                <tr>
                  <td>Momiji</td>
                  <td>Female</td>
                  <td>???</td>
                </tr>
              </tbody>
            </table>
            <pre>
              <code>{haskell}</code>
            </pre>
            <h3>Heading Three</h3>
            <p>
              This is a sentence with <code>code</code> and{" "}
              <a href="#">links</a>.
            </p>
            <p>
              We <b>call</b> a human <strong>Futanari</strong> iff <i>he/she</i>
              :
            </p>
            <ol>
              <li>Have a dick</li>
              <li>Have a pussy</li>
            </ol>
            <blockquote>
              Always, everywhere God is present, and always He seeks to discover
              Himself to each one.
              <blockquote>Maybe better</blockquote>
            </blockquote>
            <ul>
              <li>list 1</li>
              <li>list 2</li>
              <li>list 3</li>
              <li>list 4</li>
            </ul>
          </article>
        </details>

        <details>
          <summary>Progress</summary>
          <div class="flex gap-4">
            <progress class="progress" max="100" value="0"></progress>
            <progress class="progress" max="100" value="20"></progress>
            <progress class="progress" max="100" value="100"></progress>
            <progress class="progress" max="100"></progress>
          </div>
        </details>

        <details>
          <summary>Tabs</summary>
          <Tabs name="menu">
            <TabsItem id="preview" q:slot="trigger">
              Preview
            </TabsItem>
            <p>This is preview page</p>
            <TabsItem id="code" q:slot="trigger" checked>
              Code
            </TabsItem>
            <p>This is code page</p>
            <TabsItem id="disable" q:slot="trigger" disabled>
              Disable
            </TabsItem>
            <p>This is disabled</p>
          </Tabs>
        </details>

        <details>
          <summary>Switch</summary>
          <div class="space-y-2">
            <label class="flex items-center gap-4">
              <input type="checkbox" class="switch" />
              <span>Yes you are right</span>
            </label>
            <label class="flex items-center gap-4">
              <input type="checkbox" class="switch" checked />
              <span>Yes you are wrong</span>
            </label>
            <label class="flex items-center gap-4">
              <input type="checkbox" class="switch" disabled />
              <span>This feature is blocked</span>
            </label>
          </div>
        </details>

        <details>
          <summary>Toggle</summary>
          <div class="flex flex-wrap gap-2">
            <input type="checkbox" hidden id="toggle-1" />
            <label class="toggle" for="toggle-1" tabIndex={0}>
              Arch
            </label>

            <input type="checkbox" hidden id="toggle-2" />
            <label class="toggle" for="toggle-2" tabIndex={0}>
              Ubuntu
            </label>

            <button class="toggle active">Active</button>
            <button class="toggle disabled">Disabled</button>

            <input type="checkbox" hidden id="toggle-3" />
            <label class="toggle toggle-sm" for="toggle-3" tabIndex={0}>
              Debian
            </label>

            <input type="checkbox" hidden id="toggle-4" />
            <label class="toggle toggle-lg" for="toggle-4" tabIndex={0}>
              Fedora
            </label>
          </div>
        </details>

        <details>
          <summary>Menu</summary>
          <Popover class="w-64" direction="right">
            <button class="btn-ghost btn" q:slot="trigger">
              Open
            </button>
            <menu class="menu">
              <li class="menu-item">
                <BellAlert class="menu-icon" />
                Add
              </li>
              <li class="menu-item disabled">
                <BellSlash class="menu-icon" />
                Substract
              </li>
              <li class="menu-item">
                <BellSlash class="menu-icon" />
                Substract
              </li>
              <PopoverMenu class="w-48">
                <span q:slot="trigger">More Actions</span>
                <menu class="menu">
                  <li class="menu-item">Multiply</li>
                  <li class="menu-item">Divide</li>
                  <li class="menu-item">Module</li>
                </menu>
              </PopoverMenu>

              <hr class="menu-separator" />

              <h3 class="menu-title">Checkbox</h3>
              <label class="menu-checkbox" tabIndex={0}>
                <input type="checkbox" hidden checked />
                Make Love with Mihari
              </label>
              <label class="menu-checkbox" tabIndex={0}>
                <input type="checkbox" hidden checked />
                Make Love with Mahiro
              </label>
              <label class="menu-checkbox" tabIndex={0}>
                <input type="checkbox" hidden checked />
                Make Love with Kaede
              </label>
              <label class="menu-checkbox" tabIndex={0}>
                <input type="checkbox" hidden />
                Make Love with Momiji
              </label>
              <label class="menu-checkbox" tabIndex={0}>
                <input type="checkbox" hidden disabled />
                Make Love with Asahi
              </label>

              <hr class="menu-separator" />

              <h3 class="menu-title">Radio</h3>
              <label class="menu-radio" tabIndex={0}>
                <input type="radio" name="menu-radio-1" hidden />
                Make Love with Mihari
              </label>
              <label class="menu-radio" tabIndex={0}>
                <input type="radio" name="menu-radio-1" hidden checked />
                Make Love with Mahiro
              </label>
              <label class="menu-radio" tabIndex={0}>
                <input type="radio" name="menu-radio-1" hidden />
                Make Love with Kaede
              </label>
              <label class="menu-radio" tabIndex={0}>
                <input type="radio" name="menu-radio-1" hidden />
                Make Love with Momiji
              </label>
              <label class="menu-radio" tabIndex={0}>
                <input type="radio" name="menu-radio-1" hidden disabled />
                Make Love with Asahi
              </label>
            </menu>
          </Popover>
        </details>

        <details>
          <summary>Nav</summary>
          <div class="w-64">
            <nav class="nav">
              <h2 class="nav-title">Title</h2>
              <button class="active nav-item">
                <BellAlert class="h-4 w-4" />
                Tatty
              </button>
              <button class="nav-item">
                <BellAlert class="h-4 w-4" />
                Tatty
              </button>
              <button class="nav-item">
                <BellAlert class="h-4 w-4" />
                Tatty
              </button>
              <button class="nav-item">
                <BellAlert class="h-4 w-4" />
                Tatty
              </button>
            </nav>
            <nav class="nav">
              <h2 class="nav-title">Title</h2>
              <button class="active nav-item">
                <Close class="h-4 w-4" />
                Tatty
              </button>
              <button class="nav-item">
                <Close class="h-4 w-4" />
                Tatty
              </button>
              <button class="active nav-item">
                <Close class="h-4 w-4" />
                Tatty
              </button>
              <button class="nav-item">
                <Close class="h-4 w-4" />
                Tatty
              </button>
            </nav>
          </div>
        </details>
      </body>
    </>
  );
});

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import GithubIcon from "./icons/GithubIcon";

export default component$(() => {
  return (
    <div
      class="sticky top-0 z-10 flex h-20 justify-between p-4"
      window:onScroll$={(_, el) => {
        if (window.scrollY > 0) {
          el.classList.add(...["bg-white", "shadow-lg", "bg-opacity-90"]);
        } else {
          el.classList.remove(...["bg-white", "shadow-lg", "bg-opacity-90"]);
        }
      }}
    >
      <img class="ml-4" src="https://onimai.jp/assets/img/common/logo.png" />
      <div class="mr-4 flex items-center space-x-4">
        <Link class="btn-outline btn" href="/docs/get-start">
          Get Start
        </Link>
        <Link class="btn-outline btn" href="/docs/drawer">
          Drawer
        </Link>
        <Link
          class="btn-outline btn"
          href="https://github.com/Ling-yunchi/onimaiui"
        >
          <GithubIcon />
        </Link>
      </div>
    </div>
  );
});

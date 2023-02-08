import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Header from "~/components/Header";
import { NavLink } from "~/components/nav-link/nav-link";

export default component$(() => {
  return (
    <div class="flex">
      <aside class="sticky top-0 h-screen w-64 shrink-0 self-start overflow-y-auto border-r border-r-slate-200 dark:border-r-slate-700">
        <h1 class="flex items-center px-8 py-6 text-2xl font-semibold tracking-tight">
          Onimai UI
        </h1>
        <nav class="nav">
          <h2 class="nav-title">Get Start</h2>
          <NavLink class="nav-item" href="/docs/get-start">
            Install
          </NavLink>
        </nav>
        <nav class="nav">
          <h2 class="nav-title">Components</h2>
          <NavLink class="nav-item" href="/docs/modal">
            Modal
          </NavLink>
          <NavLink class="nav-item" href="/docs/drawer">
            Drawer
          </NavLink>
        </nav>
      </aside>
      <div class="flex-1">
        <Header></Header>
        <article class="prose p-8">
          <Slot />
        </article>
      </div>
    </div>
  );
});

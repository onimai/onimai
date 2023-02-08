import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Header from "~/components/Header";

export default component$(() => {
  // prettier-ignore
  const router = [
    { path: "/docs/get-start", title: "Get Start" },
    { path: "/docs/drawer", title: "Drawer" },
    { path: "/docs/modal", title: "Modal" },
  ]
  return (
    <div class="flex">
      <menu class="sticky top-0 flex w-52 flex-col space-y-2 p-4">
        {router.map((item) => (
          <Link
            class="rounded-full px-4 py-1 hover:bg-slate-200 hover:underline"
            href={item.path}
          >
            {item.title}
          </Link>
        ))}
      </menu>
      <div class="flex-1">
        <Header></Header>
        <article class="prose p-8">
          <Slot />
        </article>
      </div>
    </div>
  );
});

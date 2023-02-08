import { component$, Slot } from "@builder.io/qwik";
import { Link, LinkProps, useLocation } from "@builder.io/qwik-city";
import { cn } from "~/utils";

type Props = Omit<LinkProps, "class"> & {
  class?: string;
};

export const NavLink = component$((props: Props) => {
  const loc = useLocation();
  const active = loc.href === props.href || loc.pathname === props.href + "/";

  return (
    <Link {...props} class={cn(props.class, active && "active")}>
      <Slot />
    </Link>
  );
});

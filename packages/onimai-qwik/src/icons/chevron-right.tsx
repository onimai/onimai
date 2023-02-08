import { component$ } from "@builder.io/qwik";

type Props = {
  strokeWidth?: number;
  class?: string;
};

export const ChevronRight = component$((props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={props.strokeWidth ?? 2}
      stroke="currentColor"
      class={props.class}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
});

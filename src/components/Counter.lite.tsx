import { Show, useState } from "@builder.io/mitosis";

export default function Counter(props: any) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Show when={count}>
        <h1>You Win!</h1>
      </Show>
      <h1>You have Clicked {count} times.</h1>
      <button class="" onClick={() => setCount(count + 1)}>
        Click me to Add One
      </button>
    </div>
  );
}

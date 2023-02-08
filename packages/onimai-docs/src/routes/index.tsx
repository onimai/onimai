import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="p-4 flex gap-4">
        <Link class="btn btn-link" href="/docs/get-start">
          Get Start
        </Link>
        <Link class="btn btn-link" href="/docs/button">
          Buttons
        </Link>
        <Link class="btn btn-link" href="/docs/modal">
          Modals
        </Link>
      </div>
      <div class="flex justify-center [background-image:_url(https://onimai.jp/assets/img/common/mainbg.jpg)] bg-repeat [background-size:500px] bg-scroll">
        <div class="flex flex-col max-w-[60rem] bg-white px-8">
          <img src="https://onimai.jp/assets/img/common/logo.png" />
          <div class="prose">
            <div class="flex justify-center my-8">
              <h1 class="text-yellow-800">
                Onimai <font class="text-blue-400">U</font>
                <font class="text-red-400">I</font>
              </h1>
            </div>
            <p>
              Onimai UI is a Cute CSS framework for building cartoon style UI
              for your Website.
            </p>
            <p>
              you can choose Pure CSS in <code>onimai</code> or Qwik components
              in <code>onimai-qwik</code>.
            </p>
            <p>
              We strongly recommend that you watch the animation&nbsp;
              {/* 斜体 */}
              <span class="font-bold italic">
                I'm Now Your Sister! (Onimai)
              </span>
              &nbsp;so that your mind and body will be healed by Mahiro Oyama's
              cuteness.
            </p>
            <p>
              <img
                class="rounded-3xl"
                src="https://onimai.jp/episode/img/01_05.jpg"
              />
            </p>
            <p>
              <Link class="btn btn-outline" href="/docs/get-start">
                Get Start
              </Link>
            </p>
            <p>
              goto official site&nbsp;
              <Link href="https://onimai.jp/">https://onimai.jp/</Link>
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

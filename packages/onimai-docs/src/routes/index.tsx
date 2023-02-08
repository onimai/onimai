import { component$, useStyles$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";
import Header from "~/components/Header";

export default component$(() => {
  useStyles$(`
  @keyframes bg-scroll {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 1600px 560px;
    }
  }`);
  return (
    <div class="bg-scroll bg-repeat [background-image:_url(https://onimai.jp/assets/img/common/mainbg.jpg)] [background-size:_800px_560px] [animation:_bg-scroll_linear_60s_infinite]">
      <Header></Header>
      <div class="-mt-20 flex flex-col items-center">
        <div class="flex w-full flex-col items-center bg-[rgba(0,0,0,0.4)] bg-[url(https://onimai.jp/episode/img/01_05.jpg)] bg-cover bg-center bg-blend-darken">
          <div class="mt-20 flex w-full max-w-4xl flex-wrap justify-between">
            <div class="p-4 lg:pl-10 lg:pb-20">
              <div class="my-[6rem] text-center lg:text-left">
                <h1 class="font-mono text-[4rem] font-bold text-o-brown-400">
                  Onimai&nbsp;
                  <font class="text-o-blue-400">U</font>
                  <font class="text-o-pink-500">I</font>
                </h1>
                <h2 class="text-2xl font-bold text-white">纯CSS的萌系UI框架</h2>
              </div>
              <h2 class="mb-4 text-xl font-bold text-white">
                我们只干三件事：
              </h2>
              <div class="flex flex-wrap space-x-8">
                <div class="text-xl text-white">
                  <ul class="space-y-2">
                    <li>○ 可爱~</li>
                    <li>○ 可爱~~</li>
                    <li>○ 还是他妈的可爱！</li>
                  </ul>
                </div>
                <code class="h-fit rounded-xl bg-black bg-opacity-20 p-4 text-white">
                  npm i onimai
                  <br />
                  npm i @onimai/qwik
                </code>
              </div>
            </div>
          </div>
        </div>
        <div class="flex max-w-4xl flex-col px-8">
          <div class="prose">
            <div class="my-8 flex justify-center"></div>
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
              <Link class="btn-outline btn" href="/docs/guide/get-start">
                Get Start
              </Link>
            </p>
            <p>
              goto official site&nbsp;
              <Link href="https://onimai.jp/">https://onimai.jp/</Link>
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
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

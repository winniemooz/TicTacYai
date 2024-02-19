import { c as create_ssr_component, d as add_attribute, e as escape } from "../../chunks/ssr.js";
import "../../chunks/firebase.client.js";
import "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  let slideIndex = 1;
  const slideTitle = {
    1: "Rules",
    2: "Characters",
    3: "Special Skills"
  };
  return `<div class="font-fredoka flex h-dvh w-full flex-col items-center justify-center bg-mongoose-300"><div class="flex w-full justify-center pb-5" data-svelte-h="svelte-8sfzes"><div class="w-3/4 md:w-1/2"><img src="/logo.png" alt=""></div></div> <div class="flex w-[80%] flex-col gap-4 rounded md:flex-row"><div class="flex-1"><div class="flex"><button${add_attribute(
    "class",
    `flex-1 justify-center rounded-t-xl p-4 text-center text-2xl text-mongoose-900 transition ${"bg-mongoose-100"}`,
    0
  )}>Register</button> <button${add_attribute(
    "class",
    `flex-1 justify-center rounded-t-xl p-4 text-center text-2xl text-mongoose-900 transition ${"bg-mongoose-200 text-xl font-bold"}`,
    0
  )}>Login</button></div> <div class="flex rounded-b-xl bg-mongoose-200"><div class="flex h-[40vh] w-full items-center px-10"><div class="flex p-10" data-svelte-h="svelte-jjwtcw"><img src="/favicon.png" alt=""></div> <div class="w-full flex-col px-10">${`<div class="form-container"><div class="flex"><input class="mb-4 w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300" type="text" placeholder="Email"${add_attribute("value", email, 0)}></div> <input class="mb-8 w-full rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-mongoose-300" type="password" placeholder="Password"${add_attribute("value", password, 0)}></div> <button class="rounded-full bg-mongoose-800 px-8 py-2 text-white transition hover:bg-mongoose-600 active:bg-mongoose-900" data-svelte-h="svelte-9otjs6">Login</button>`}</div></div></div></div> <div class="flex flex-1 flex-col rounded-xl bg-mongoose-400"><p class="w-full rounded-t-xl bg-mongoose-500 p-5 text-center text-2xl font-bold text-white">${escape(slideTitle[slideIndex])}</p> <div class="flex flex-1"><div class="flex h-full items-center justify-center p-1"><button class="ml-4 cursor-pointer rounded-md p-2 text-xl text-white transition hover:text-mongoose-700 active:text-mongoose-400" data-svelte-h="svelte-d0ovcd">❮</button></div> <div class="flex-1 overflow-y-auto text-white">${` <div class="w-full" data-svelte-h="svelte-j6hjcv"><div class="h-250 flex flex-col items-center justify-center p-5"><p class="text-xl px-1 py-3">This game have gameplay similar to the normal Tic-Tac-Toe game, but there will be
									a grid divided into 9 small grids 3x3 per grid. game will randomly select squares
									with special items, which the player will select X/O on any cell When a player win
									in a small grids, it becomes X/O in a large grid. When a player win in a grids
									with a special skill, the player can use that skill in the next round. But players
									will not be able to collect this right to use in the next round. The game ends
									when one player wins the big grid.</p></div></div>`} ${``} ${``}</div> <div class="flex h-full items-center justify-center p-1"><button class="mr-4 cursor-pointer rounded-md p-2 text-xl text-white transition hover:text-mongoose-700 active:text-mongoose-400" data-svelte-h="svelte-uois0t">❯</button></div></div></div></div></div>`;
});
export {
  Page as default
};

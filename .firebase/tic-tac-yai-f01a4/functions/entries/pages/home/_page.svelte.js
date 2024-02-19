import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slideIndex = 1;
  const slideTitle = {
    1: "Rules",
    2: "Characters",
    3: "Special Skills"
  };
  return `<div class="flex h-screen flex-col items-center justify-center"><div class="w-[500px] h-[500px] rounded shadow border"><p class="bg-mongoose-800 text-white p-5 w-full">${escape(slideTitle[slideIndex])} </p><p data-svelte-h="svelte-6a4qnx"></p><div class="flex"><button class="cursor-pointer rounded-md bg-white p-2 text-xl text-mongoose-800" data-svelte-h="svelte-xztufy">❮</button> ${` <div class="w-full" data-svelte-h="svelte-1buhgnv"><div class="h-250 flex flex-col items-center justify-center p-5"><p class="text-center">เกมนี้จะมีรูปแบบการเล่นที่ใกล้เคียงกับเกม Tic-Tac-Toe
              ปกติแต่จะมีตารางแบ่งเป็นตารางย่อยเล็กๆ 9 ตาราง ตารางละ 3x3 โดยเราจะสุ่มช่องที่มี Items
              พิเศษอยู่ โดยผู้เล่นจะเลือกลง X/O ในช่องไหนก็ได้ เมื่อผู้เล่นชนะในช่องเล็กแล้วจะกลายเป็น
              X/O ในช่องใหญ่ เมื่อผู้เล่นชนะในช่องที่มี skill พิเศษผู้เล่นก็สามารถใช้ Skill
              ในรอบถัดไปได้ แต่ผู้เล่นจะไม่สามารถเก็บสิทธินี้ไปใช้ในรอบต่อต่อไปได้
              เกมจะจบลงต่อเมื่อผู้เล่นฝ่ายใดฝ่ายหนึ่งชนะในช่องใหญ่</p></div></div>`} ${``} ${``} <button class="cursor-pointer rounded-md bg-white p-2 text-xl text-mongoose-800" data-svelte-h="svelte-1y9jeja">❯</button></div></div></div>`;
});
export {
  Page as default
};

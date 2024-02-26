import { writable } from "svelte/store";

export const boardYai = writable(Array(9).fill(""));

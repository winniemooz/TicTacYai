

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/lobby/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.C-W-oDu5.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.I2SEuowj.js"];
export const stylesheets = [];
export const fonts = [];

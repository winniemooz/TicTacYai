

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/joinroom/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.C-W-oDu5.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.I2SEuowj.js"];
export const stylesheets = [];
export const fonts = [];

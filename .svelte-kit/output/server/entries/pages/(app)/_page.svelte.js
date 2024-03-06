import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;400;500&display=swap");.svelte-go00k9.svelte-go00k9{font-family:"Red Hat Mono", monospace;font-size:30px;color:white;overflow:hidden}main.svelte-go00k9.svelte-go00k9{height:100vh;width:100vw;background-image:url("./weatherSkyBackDrop.png");background-size:cover;background-repeat:no-repeat}.homepagecontainer.svelte-go00k9.svelte-go00k9{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#ddd0c8;overflow:hidden}.textcont.svelte-go00k9.svelte-go00k9{margin:3px;height:40vh;width:600px;max-width:60vw;display:flex;justify-content:center;gap:10px;flex-direction:column;flex-wrap:wrap}.pcont.svelte-go00k9.svelte-go00k9{text-align:end;border-right:5px solid #d47871;border-bottom:2px solid #d47871;padding-right:2px}.headcont.svelte-go00k9.svelte-go00k9{text-align:start;border-left:5px solid #d47871;border-top:2px solid #d47871;padding-left:2px}.input.svelte-go00k9.svelte-go00k9{width:9em;height:34px;margin-top:20px;display:flex;justify-content:center;align-items:center;background-color:#f99a94;border-radius:10px}.input.svelte-go00k9 button.svelte-go00k9{padding:0;border:0;height:34px;min-width:6rem;background-color:#d47871;color:#fff;font-size:20px;text-align:center;border-radius:10px}.input.svelte-go00k9 button.svelte-go00k9:hover{background-color:#a1524d}.input.svelte-go00k9 input.svelte-go00k9{height:34px;padding-left:10px;font-size:20px;background-color:#f99a94;border-radius:10px;color:#fff}.input.svelte-go00k9 input.svelte-go00k9:focus{outline:none}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title = `Welcome to WeatherCast`;
  let lilman = "";
  let i = 0;
  const baby = setInterval(
    () => {
      lilman += title[i++];
      if (lilman.length === title.length) {
        clearInterval(baby);
      }
    },
    100
  );
  let babytitle = `etis rehtaew gnirob itna ehT`;
  let babyman = "";
  let k = babytitle.length - 1;
  const boy = setInterval(
    () => {
      babyman += babytitle[k--];
      if (babyman.length === babytitle.length) {
        clearInterval(boy);
      }
    },
    60
  );
  let weather = "";
  $$result.css.add(css);
  return `<main class="svelte-go00k9">
  <div class="homepagecontainer svelte-go00k9"><div class="textcont svelte-go00k9"><div class="headcont svelte-go00k9"><h1 contenteditable="false" class="svelte-go00k9">${(($$value) => $$value === void 0 ? `|` : $$value)(lilman)}</h1></div>
      <div class="pcont svelte-go00k9"><h3 contenteditable="false" class="svelte-go00k9">${(($$value) => $$value === void 0 ? `|` : $$value)(babyman)}</h3></div></div>
    <div class="input svelte-go00k9"><input type="text" placeholder="Location" class="svelte-go00k9"${add_attribute("value", weather, 0)}>
      <button class="svelte-go00k9">Search</button></div></div>
  
</main>`;
});
export {
  Page as default
};

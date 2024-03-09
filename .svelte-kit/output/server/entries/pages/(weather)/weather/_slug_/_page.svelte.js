import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, f as null_to_empty, v as validate_component } from "../../../../../chunks/index.js";
import { p as page } from "../../../../../chunks/stores.js";
const current_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;400;500&display=swap");.svelte-yausen.svelte-yausen{font-family:"Red Hat Mono", monospace;color:white}.glass.svelte-yausen.svelte-yausen{background:linear-gradient(\r\n      135deg,\r\n      rgba(226, 215, 215, 0.1),\r\n      rgba(255, 255, 255, 0)\r\n    );backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:20px;border:1px solid rgba(255, 255, 255, 0.18);box-shadow:0 8px 32px 0 rgba(0, 0, 0, 0.37)}.presentcontainer.svelte-yausen.svelte-yausen{border-radius:10px;height:100%;width:100%;padding:10px}.presentinfo.svelte-yausen.svelte-yausen{width:100%;height:60%;display:flex;flex-direction:column;gap:3rem;padding-block:20px;padding-inline:10px;overflow:hidden}.presentinfo-elements.svelte-yausen.svelte-yausen{display:flex;justify-content:space-between;align-items:center}.presentinfo.svelte-yausen p.svelte-yausen{font-weight:500;font-size:18px}hr.svelte-yausen.svelte-yausen{background-color:white;height:2px}.weather-card.svelte-yausen.svelte-yausen{height:15rem;display:flex}@media(max-width: 750px){.icon-container.svelte-yausen.svelte-yausen{position:relative;width:50%;display:flex;flex-direction:column;justify-content:center;align-items:center}}.icon-container.svelte-yausen.svelte-yausen{width:50%;display:flex;justify-content:center;align-items:center}.icon.svelte-yausen.svelte-yausen{height:40%;min-height:92px;min-width:92px}.icon.svelte-yausen img.svelte-yausen{width:100%;height:100%;object-fit:contain}.card-info.svelte-yausen.svelte-yausen{width:50%;display:flex;flex-direction:column;justify-content:center;align-items:left;gap:13px}',
  map: null
};
const Current = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let location, temperature, condition, condition_icon, local_time, feels_like, wind_kph, pressure, precip, humidity, vision, uv, wind_gust, wind_dir, wind_deg;
  $page.params.slug;
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<div class="presentcontainer glass svelte-yausen"><h1 class="svelte-yausen">${escape(location)}</h1>
  <h4 class="svelte-yausen">${escape(local_time)}</h4>
  <div class="weather-card svelte-yausen"><div class="icon-container svelte-yausen"><div class="icon svelte-yausen"><img${add_attribute("src", condition_icon, 0)} alt="Weather condition" class="svelte-yausen"></div>

      <div class="temperature svelte-yausen"><h1 class="svelte-yausen">Temp: ${escape(temperature)}°</h1>
        <p class="svelte-yausen">Feels like: ${escape(feels_like)}°</p></div></div>

    <div class="card-info svelte-yausen"><p class="svelte-yausen">Condition: ${escape(condition)}</p>
      <hr class="svelte-yausen">
      <p class="svelte-yausen">Wind Speeds: ${escape(wind_kph)}</p>
      <hr class="svelte-yausen">
      <p class="svelte-yausen">Visibility: ${escape(vision)}</p>
      <hr class="svelte-yausen"></div></div>
  <hr class="svelte-yausen">
  <div class="presentinfo svelte-yausen"><div class="presentinfo-elements svelte-yausen"><p class="svelte-yausen">Wind gusts:</p>
      <span class="svelte-yausen">${escape(wind_gust)}</span></div>
    <div class="presentinfo-elements svelte-yausen"><p class="svelte-yausen">Wind degree:</p>
      <span class="svelte-yausen">${escape(wind_deg)}</span></div>
    <div class="presentinfo-elements svelte-yausen"><p class="svelte-yausen">Wind direction:</p>
      <span class="svelte-yausen">${escape(wind_dir)}</span></div>
    <div class="presentinfo-elements svelte-yausen"><p class="svelte-yausen">Pressure:</p>
      <span class="svelte-yausen">${escape(pressure)}</span></div>
    <div class="presentinfo-elements svelte-yausen"><p class="svelte-yausen">Precipitaion:</p>
      <span class="svelte-yausen">${escape(precip)}</span></div>
    <div class="presentinfo-elements svelte-yausen"><p class="svelte-yausen">Humidity:</p>
      <span class="svelte-yausen">${escape(humidity)}</span></div>
    <div class="presentinfo-elements svelte-yausen"><p class="svelte-yausen">UV levels:</p>
      <span class="svelte-yausen">${escape(uv)}</span></div></div>
</div>`;
});
const forecast_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;400;500&display=swap");.svelte-d5bkgl.svelte-d5bkgl{font-family:"Red Hat Mono", monospace;color:white}.glass.svelte-d5bkgl.svelte-d5bkgl{background:linear-gradient(\r\n      135deg,\r\n      rgba(226, 215, 215, 0.1),\r\n      rgba(255, 255, 255, 0)\r\n    );backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:20px;border:1px solid rgba(255, 255, 255, 0.18);box-shadow:0 8px 32px 0 rgba(0, 0, 0, 0.37)}.hourly.svelte-d5bkgl.svelte-d5bkgl{border-radius:10px;height:100%;width:100%;padding:10px;display:flex;justify-content:center;align-items:center}.timeline.svelte-d5bkgl.svelte-d5bkgl{position:relative;max-width:1200px;height:100%;width:60%;min-width:300px;display:flex;flex-direction:column;justify-content:center}.timeline.svelte-d5bkgl.svelte-d5bkgl::after{content:"";position:absolute;width:6px;height:100%;background:#fff;top:0;left:50%;margin-left:-3px;z-index:-1}.container.svelte-d5bkgl.svelte-d5bkgl{position:relative;min-width:150px;width:40%;height:8em;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;border-radius:25px;border:2px solid #f86464;background:linear-gradient(\r\n      135deg,\r\n      rgba(236, 232, 232, 0.205),\r\n      rgba(223, 219, 219, 0.151)\r\n    );backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:20px;border:1px solid #fff;box-shadow:3px 8px 32px 3px rgba(255, 255, 255, 0.356)}.container.svelte-d5bkgl h3.svelte-d5bkgl{font-size:22px;font-weight:650}.weather.svelte-d5bkgl.svelte-d5bkgl{display:flex;flex-direction:column;justify-content:center;align-items:center}.weather.svelte-d5bkgl p.svelte-d5bkgl{font-size:20px;font-weight:500}.text-box.svelte-d5bkgl.svelte-d5bkgl{display:flex;justify-content:space-between;align-items:center;gap:10px}.left-date-container.svelte-d5bkgl.svelte-d5bkgl{left:9%}.left-container.svelte-d5bkgl.svelte-d5bkgl{left:-4%}.right-date-container.svelte-d5bkgl.svelte-d5bkgl{left:55%}.right-container.svelte-d5bkgl.svelte-d5bkgl{left:55%}.ClearDay.svelte-d5bkgl.svelte-d5bkgl{height:58.6px;width:58.6px;background-image:url("static/ClearDay.svg");background-size:contain;background-repeat:no-repeat}.ClearNight.svelte-d5bkgl.svelte-d5bkgl{width:58px;height:65.5px;background-image:url("static/ClearNight.svg");background-size:contain;background-repeat:no-repeat}.CloudRain.svelte-d5bkgl.svelte-d5bkgl{height:56px;width:76px;background-image:url("static/CloudRain.svg");background-size:contain;background-repeat:no-repeat}.Cloudy.svelte-d5bkgl.svelte-d5bkgl{height:50px;width:70px;background-image:url("static/Cloudy.svg");background-size:contain;background-repeat:no-repeat}.CloudyDay.svelte-d5bkgl.svelte-d5bkgl{height:50px;width:70px;background-image:url("static/CloudyDay.svg");background-size:contain;background-repeat:no-repeat}.CloudyNight.svelte-d5bkgl.svelte-d5bkgl{height:50px;width:70px;background-image:url("static/CloudyNight.svg");background-size:contain;background-repeat:no-repeat}.RainyDay.svelte-d5bkgl.svelte-d5bkgl{height:50px;width:70px;background-image:url("static/RainyDay.svg");background-size:contain;background-repeat:no-repeat}.RainyNight.svelte-d5bkgl.svelte-d5bkgl{height:50px;width:70px;background-image:url("static/RainyNight.svg");background-size:contain;background-repeat:no-repeat}.Snow.svelte-d5bkgl.svelte-d5bkgl{height:50px;width:70px;background-image:url("static/Snow.svg");background-size:contain;background-repeat:no-repeat}.SnowyDay.svelte-d5bkgl.svelte-d5bkgl{height:63px;width:65.5px;background-image:url("static/SnowyDay.svg");background-size:contain;background-repeat:no-repeat}.SnowyNight.svelte-d5bkgl.svelte-d5bkgl{height:50px;width:70px;background-image:url("static/SnowyNight.svg");background-size:contain;background-repeat:no-repeat}.Thunder.svelte-d5bkgl.svelte-d5bkgl{background-image:url("static/Thunder.svg");background-size:contain;background-repeat:no-repeat;height:50px;width:70px}',
  map: null
};
const Forecast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { info } = $$props;
  const weather_codes = {
    "01d": "ClearDay",
    "01n": "ClearNight",
    "02d": "CloudyDay",
    "02n": "CloudyNight",
    "03d": "CloudyDay",
    "03n": "CloudyNight",
    "04d": "Cloudy",
    "04n": "Cloudy",
    "09d": "CloudRain",
    "09n": "CloudRain",
    "10d": "RainyDay",
    "10n": "RainyNight",
    "11d": "Thunder",
    "11n": "Thunder",
    "13d": "SnowyDay",
    "13n": "SnowyNight"
  };
  let event = /* @__PURE__ */ new Date();
  const current_month = event.toLocaleDateString(void 0, { month: "long" });
  const current_day = event.getDate();
  if ($$props.info === void 0 && $$bindings.info && info !== void 0)
    $$bindings.info(info);
  $$result.css.add(css$1);
  return `<div class="hourly glass svelte-d5bkgl"><div class="timeline svelte-d5bkgl"><div class="container left-container glass svelte-d5bkgl"><h3 class="svelte-d5bkgl">${escape(current_month + " " + current_day)}</h3>
      <div class="text-box svelte-d5bkgl"><div class="weather svelte-d5bkgl"><p class="svelte-d5bkgl">Min: -6°C</p>
          <p class="svelte-d5bkgl">Max: ${escape(info.day1_temp)}°C</p></div>
        <div class="${escape(null_to_empty(weather_codes[info.day1_condition]), true) + " svelte-d5bkgl"}"></div></div></div>

    <div class="container right-container svelte-d5bkgl"><h3 class="svelte-d5bkgl">${escape(current_month)} ${escape(current_day + 1)}</h3>
      <div class="text-box svelte-d5bkgl"><h2 class="svelte-d5bkgl">${escape(info.day2_temp)}°C</h2>
        <div class="${escape(null_to_empty(weather_codes[info.day2_condition]), true) + " svelte-d5bkgl"}"></div></div></div>

    <div class="container left-container svelte-d5bkgl"><h3 class="svelte-d5bkgl">${escape(current_month)} ${escape(current_day + 2)}</h3>
      <div class="text-box svelte-d5bkgl"><h2 class="svelte-d5bkgl">${escape(info.day3_temp)}°C</h2>
        <div class="${escape(null_to_empty(weather_codes[info.day3_condition]), true) + " svelte-d5bkgl"}"></div></div></div>

    <div class="container right-container svelte-d5bkgl"><h3 class="svelte-d5bkgl">${escape(current_month)} ${escape(current_day + 3)}</h3>
      <div class="text-box svelte-d5bkgl"><h2 class="svelte-d5bkgl">${escape(info.day4_temp)}°C</h2>
        <div class="${escape(null_to_empty(weather_codes[info.day4_condition]), true) + " svelte-d5bkgl"}"></div></div></div>

    <div class="container left-container svelte-d5bkgl"><h3 class="svelte-d5bkgl">${escape(current_month)} ${escape(current_day + 4)}</h3>
      <div class="text-box svelte-d5bkgl"><h2 class="svelte-d5bkgl">${escape(info.day5_temp)}°C</h2>
        <div class="${escape(null_to_empty(weather_codes[info.day5_condition]), true) + " svelte-d5bkgl"}"></div></div></div></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;400;500&display=swap");.svelte-zrzht8{font-family:"Red Hat Mono", monospace;color:white}.mainpage.svelte-zrzht8{height:100svh;width:100svw;padding:10px;background-image:url(weatherSkyBackDrop.png);background-size:100% 100%;display:flex;justify-content:center;align-items:center;gap:2rem}@media(max-width: 1300px){.mainpage.svelte-zrzht8{height:120rem;width:100svw;padding:10px;background-image:url("../../weather/[slug]/weatherSkyBackDrop.png");background-size:cover;background-repeat:no-repeat;display:flex;flex-direction:column;justify-content:center;align-items:center}.current-container.svelte-zrzht8{height:100%;width:100%}.forcast-container.svelte-zrzht8{height:100%;width:100%}}.current-container.svelte-zrzht8{height:90%;flex:1 1 36%}.forcast-container.svelte-zrzht8{flex:1 1 36%;height:90%}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="mainpage svelte-zrzht8"><div class="current-container svelte-zrzht8">${validate_component(Current, "Current").$$render($$result, {}, {}, {})}</div>
  <div class="forcast-container svelte-zrzht8">${validate_component(Forecast, "Forecast").$$render($$result, { info: data }, {}, {})}</div>
</div>`;
});
export {
  Page as default
};

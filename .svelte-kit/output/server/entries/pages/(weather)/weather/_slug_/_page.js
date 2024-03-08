async function load({ fetch, params }) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?&q=${params.slug}&appid=3bd8207231b9e5ae3420d8c59a11c9e9`
  );
  const data = await response.json();
  const day1_temp = Math.round(data.list[8].main.temp - 273.15);
  const day2_temp = Math.round(data.list[16].main.temp - 273.15);
  const day3_temp = Math.round(data.list[23].main.temp - 273.15);
  const day4_temp = Math.round(data.list[31].main.temp - 273.15);
  const day5_temp = Math.round(data.list[38].main.temp - 273.15);
  const day1_condition = data.list[8].weather[0].icon;
  const day2_condition = data.list[16].weather[0].icon;
  const day3_condition = data.list[23].weather[0].icon;
  const day4_condition = data.list[31].weather[0].icon;
  const day5_condition = data.list[38].weather[0].icon;
  return { day1_temp, day2_temp, day3_temp, day4_temp, day5_temp, day1_condition, day2_condition, day3_condition, day4_condition, day5_condition };
}
export {
  load
};

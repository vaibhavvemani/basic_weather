<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let location,
    temperature,
    condition,
    condition_icon,
    local_time,
    feels_like,
    wind_kph,
    pressure,
    precip,
    humidity,
    vision,
    uv,
    wind_gust,
    wind_dir,
    wind_deg;
  let slug = $page.params.slug;

  onMount(async () => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=58c018eea6c840be83c75506232204&q=${slug}`
    );
    const data = await response.json();
    location = data.location.name;
    temperature = data.current.temp_c;
    feels_like = data.current.feelslike_c;
    condition = data.current.condition.text;
    condition_icon = data.current.condition.icon;
    local_time = data.location.localtime;
    wind_kph = data.current.wind_kph;
    pressure = data.current.pressure_in;
    precip = data.current.precip_in;
    humidity = data.current.humidity;
    vision = data.current.vis_km;
    uv = data.current.uv;
    wind_gust = data.current.gust_kph;
    wind_deg = data.current.wind_degree;
    wind_dir = data.current.wind_dir;
  });
</script>

<div class="presentcontainer glass">
  <h1>{location}</h1>
  <h4>{local_time}</h4>
  <div class="weather-card">
    <div class="icon-container">
      <div class="icon">
        <img src={condition_icon} alt="Weather condition" />
      </div>

      <div class="temperature">
        <h1>Temp: {temperature}°</h1>
        <p>Feels like: {feels_like}°</p>
      </div>
    </div>

    <div class="card-info">
      <p>Condition: {condition}</p>
      <hr />
      <p>Wind Speeds: {wind_kph}</p>
      <hr />
      <p>Visibility: {vision}</p>
      <hr />
    </div>
  </div>
  <hr />
  <div class="presentinfo">
    <div class="presentinfo-elements">
      <p>Wind gusts:</p>
      <span>{wind_gust}</span>
    </div>
    <div class="presentinfo-elements">
      <p>Wind degree:</p>
      <span>{wind_deg}</span>
    </div>
    <div class="presentinfo-elements">
      <p>Wind direction:</p>
      <span>{wind_dir}</span>
    </div>
    <div class="presentinfo-elements">
      <p>Pressure:</p>
      <span>{pressure}</span>
    </div>
    <div class="presentinfo-elements">
      <p>Precipitaion:</p>
      <span>{precip}</span>
    </div>
    <div class="presentinfo-elements">
      <p>Humidity:</p>
      <span>{humidity}</span>
    </div>
    <div class="presentinfo-elements">
      <p>UV levels:</p>
      <span>{uv}</span>
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;400;500&display=swap");
  * {
    font-family: "Red Hat Mono", monospace;
    color: white;
  }
  .glass {
    background: linear-gradient(
      135deg,
      rgba(226, 215, 215, 0.1),
      rgba(255, 255, 255, 0)
    );
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  }
  .presentcontainer {
    border-radius: 10px;
    height: 100%;
    width: 100%;
    padding: 10px;
  }
  .presentinfo {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    gap: 3rem;

    padding-block: 20px;
    padding-inline: 10px;
    overflow: hidden;
  }

  .presentinfo-elements {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .presentinfo p {
    font-weight: 500;
    font-size: 18px;
  }

  hr {
    background-color: white;
    height: 2px;
  }
  .weather-card {
    height: 15rem;

    display: flex;
  }

  @media (max-width: 750px) {
    .icon-container {
      position: relative;
      width: 50%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .icon-container {
    width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    height: 40%;
    min-height: 92px;
    min-width: 92px;
  }
  .icon img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }

  .card-info {
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 13px;
  }
</style>

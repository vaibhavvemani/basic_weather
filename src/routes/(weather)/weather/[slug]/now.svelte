<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let location, temperature, condition, condition_icon;
  let slug = $page.params.slug;

  onMount(async () => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=58c018eea6c840be83c75506232204&q=${slug}`
    );
    const data = await response.json();
    location = data.location.name;
    temperature = data.current.temp_f;
    condition = data.current.condition.text;
    condition_icon = data.current.condition.icon;
  });
</script>

<div class="presentcontainer glass">
  <h1>Rome</h1>
  <h4>12:34:49AM</h4>
  <div class="weather-card">
    <div class="icon-container">
      <div class="icon">
        <img src={condition_icon} alt="Weather condition" />
      </div>

      <div class="temperature">
        <h1>87°</h1>
        <p>Feels like: 89°</p>
      </div>
    </div>

    <div class="card-info">
      <p>Condition: Windy</p>
      <hr />
      <p>Wind Speeds: who cares</p>
      <hr />
      <p>Visibility: Barely</p>
      <hr />
    </div>
  </div>
  <hr />
  <div class="presentinfo">
    <p>Wind gusts:</p>
    <p>Pressure: mb/in</p>
    <p>Precipitaion: mm/in</p>
    <p>Humidity:</p>
    <p>UV levels:</p>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;400;500&display=swap");
  * {
    font-family: "Red Hat Mono", monospace;
    color: white;
  }
  * p {
    font-weight: 500;
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
    /* background-color: #c8c8c847;
		border: 1px solid white;
		box-shadow: inset 10px 10px 20px 20px #a8a8a8a1, inset -10px -10px 40px 50px #a3a3a3a2;
		backdrop-filter: blur(4px); */
    border-radius: 10px;
    height: 100%;
    width: 100%;
    padding: 10px;
  }
  .presentinfo {
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding-top: 20px;
  }
  hr {
    background-color: gray;
    height: 2px;
  }
  .weather-card {
    height: 15rem;

    display: flex;
    gap: 2rem;
  }
  .icon-container {
    width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    height: 40%;
    width: 40%;
  }
  .icon img {
    width: 100%;
    height: 100%;

    object-fit: fill;
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

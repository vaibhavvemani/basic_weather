<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  // dt = new Date();
  // function hours(dt) {
  //   return dt.getHours();
  // }

  let slug = $page.params.slug;
  var hour_now, hour1, hour2, hour3, hour4, hour5, hour1_temp;
  onMount(async () => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=58c018eea6c840be83c75506232204&q=${slug}`
    );

    const data = await response.json();
    hour_now = new Date().getHours();
    hour1 = data.forecast.forecastday[0].hour[hour_now].time;
    hour2 = data.forecast.forecastday[0].hour[hour_now + 1].time;
    hour3 = data.forecast.forecastday[0].hour[hour_now + 2].time;
    hour4 = data.forecast.forecastday[0].hour[hour_now + 3].time;
    hour5 = data.forecast.forecastday[0].hour[hour_now + 4].time;

    hour1_temp = data.forecast.forecastday[0].hour[hour_now].temp_f;
  });
</script>

<div class="hourly glass">
  <div class="timeline">
    <div class="date-dot-container">
      <div class="date-container left-date-container">
        <h3>{hour1}</h3>
      </div>
    </div>
    <br />
    <div class="container left-container">
      <div class="text-box">
        <h2>Temp: {hour1_temp}</h2>
        <h2>Min</h2>
      </div>
    </div>
    <div class="date-dot-container">
      <div class="date-container right-date-container">
        <h3>{hour2}</h3>
      </div>
    </div>
    <br />
    <div class="container right-container">
      <div class="text-box">
        <h2>Max</h2>
        <h2>Min</h2>
      </div>
    </div>
    <div class="date-dot-container">
      <div class="date-container left-date-container">
        <h3>{hour3}</h3>
      </div>
    </div>
    <br />
    <div class="container left-container">
      <div class="text-box">
        <h2>Max</h2>
        <h2>Min</h2>
      </div>
    </div>
    <div class="date-dot-container">
      <div class="date-container right-date-container">
        <h3>{hour4}</h3>
      </div>
    </div>
    <br />
    <div class="container right-container">
      <div class="text-box">
        <h2>Max</h2>
        <h2>Min</h2>
      </div>
    </div>
    <div class="date-dot-container">
      <div class="date-container left-date-container">
        {#if hour_now + 4 >= 24}
          <h3>Come back tmr :)</h3>
        {:else}
          <h3>{hour5}</h3>
        {/if}
      </div>
    </div>
    <br />
    <div class="container left-container">
      <div class="text-box">
        <h2>Max</h2>
        <h2>Min</h2>
      </div>
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;400;500&display=swap");
  * {
    font-family: "Red Hat Mono", monospace;
    color: white;
  }

  @media (max-width: 800px) {
    .date-container h3 {
      font-size: 15px;
    }
  }

  @media (max-width: 650px) {
    .date-container h3 {
      font-size: 12px;
    }
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
  .hourly {
    border-radius: 10px;
    height: 100%;
    width: 100%;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .timeline {
    position: relative;
    max-width: 1200px;
    height: 100%;
    width: 60%;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .timeline::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 100%;
    background: #fff;
    top: 0;
    left: 50%;
    margin-left: -3px;
    z-index: -1;
  }

  .date-container {
    position: relative;
    /* width: 35%; */
    min-width: 35%;
    max-width: 35%;
    height: 100%;

    background-image: linear-gradient(to right, #f86464, #eb4a4a);
    border-radius: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .date-dot-container {
    display: flex;
    gap: 66px;
  }

  .container {
    position: relative;
    width: 50%;
    height: 13%;
    padding: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: #edadad;
  }

  .dot {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #eb4a4a;
    flex: 1 1 50%;
  }

  .left-date-container {
    left: 9%;
  }

  .left-container {
    left: -5%;
  }

  .right-date-container {
    left: 55%;
  }

  .right-container {
    left: 55%;
  }
</style>

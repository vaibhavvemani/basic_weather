<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  // dt = new Date();
  // function hours(dt) {
  //   return dt.getHours();
  // }

  let slug = $page.params.slug;
  var hour_now,
    hour1,
    hour2,
    hour3,
    hour4,
    hour5,
    hour1_temp,
    hour2_temp,
    hour3_temp,
    hour4_temp,
    hour5_temp,
    hour1_condition,
    hour2_condition,
    hour3_condition,
    hour4_condition,
    hour5_condition;
  onMount(async () => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=58c018eea6c840be83c75506232204&q=${slug}`
    );

    const data = await response.json();
    hour_now = new Date().getHours();
    hour1 = data.forecast.forecastday[0].hour[hour_now + 1].time;
    hour2 = data.forecast.forecastday[0].hour[hour_now + 2].time;
    hour3 = data.forecast.forecastday[0].hour[hour_now + 3].time;
    hour4 = data.forecast.forecastday[0].hour[hour_now + 4].time;
    hour5 = data.forecast.forecastday[0].hour[hour_now + 5].time;

    hour1_temp = data.forecast.forecastday[0].hour[hour_now + 1].temp_f;
    hour2_temp = data.forecast.forecastday[0].hour[hour_now + 2].temp_f;
    hour3_temp = data.forecast.forecastday[0].hour[hour_now + 3].temp_f;
    hour4_temp = data.forecast.forecastday[0].hour[hour_now + 4].temp_f;
    hour5_temp = data.forecast.forecastday[0].hour[hour_now + 5].temp_f;

    hour1_condition =
      data.forecast.forecastday[0].hour[hour_now + 1].condition.icon;
    hour2_condition =
      data.forecast.forecastday[0].hour[hour_now + 2].condition.icon;
    hour3_condition =
      data.forecast.forecastday[0].hour[hour_now + 3].condition.icon;
    hour4_condition =
      data.forecast.forecastday[0].hour[hour_now + 4].condition.icon;
    hour5_condition =
      data.forecast.forecastday[0].hour[hour_now + 5].condition.icon;
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
        <h2>{hour1_temp}F°</h2>
        <img src={hour1_condition} alt="Condition at current hour" />
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
        <h2>{hour2_temp}F°</h2>
        <img src={hour2_condition} alt="Condition at current hour" />
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
        <h2>{hour3_temp}F°</h2>
        <img src={hour3_condition} alt="Condition at current hour" />
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
        <h2>{hour4_temp}F°</h2>
        <img src={hour4_condition} alt="Condition at current hour" />
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
        <h2>{hour5_temp}F°</h2>
        <img src={hour5_condition} alt="Condition at current hour" />
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

  @media (max-width: 900px) {
    .date-container h3 {
      font-size: 15px;
    }

    .container {
      width: 30%;
    }
  }

  @media (max-width: 750px) {
    .date-container h3 {
      font-size: 12px;
    }

    .container {
      font-size: 10px;
    }

    .text-box {
      display: flex;
      flex-direction: column;
      gap: none;
      justify-content: center;
      align-items: center;
    }

    .text-box {
      width: 75%;
      height: 75%;
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
    width: 35%;
    min-width: 25%;
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
    min-width: 50%;
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

  .text-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .text-box img {
    width: 100%;
    height: 100%;
    object-fit: fill;
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

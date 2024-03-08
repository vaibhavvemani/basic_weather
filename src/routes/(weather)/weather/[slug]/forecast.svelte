<script>
  export let info;

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
    "13n": "SnowyNight",
  };

  let event = new Date();
  const current_month = event.toLocaleDateString(undefined, {
    month: "long",
  });

  const current_day = event.getDate();
</script>

<div class="hourly glass">
  <div class="timeline">
    <div class="date-dot-container">
      <div class="date-container left-date-container">
        <h3>{current_month + " " + current_day}</h3>
      </div>
    </div>
    <br />
    <div class="container left-container">
      <div class="text-box">
        <h2>{info.day1_temp}°C</h2>
        <div class={weather_codes[info.day1_condition]} />
      </div>
    </div>
    <div class="date-dot-container">
      <div class="date-container right-date-container">
        <h3>{current_month} {current_day + 1}</h3>
      </div>
    </div>
    <br />
    <div class="container right-container">
      <div class="text-box">
        <h2>{info.day2_temp}°C</h2>
        <div class={weather_codes[info.day2_condition]} />
      </div>
    </div>
    <div class="date-dot-container">
      <div class="date-container left-date-container">
        <h3>{current_month} {current_day + 2}</h3>
      </div>
    </div>
    <br />
    <div class="container left-container">
      <div class="text-box">
        <h2>{info.day3_temp}°C</h2>
        <div class={weather_codes[info.day3_condition]} />
      </div>
    </div>
    <div class="date-dot-container">
      <div class="date-container right-date-container">
        <h3>{current_month} {current_day + 3}</h3>
      </div>
    </div>
    <br />
    <div class="container right-container">
      <div class="text-box">
        <h2>{info.day4_temp}°C</h2>
        <div class={weather_codes[info.day4_condition]} />
      </div>
    </div>
    <div class="date-dot-container">
      <div class="date-container left-date-container">
        <h3>{current_month} {current_day + 4}</h3>
      </div>
    </div>
    <br />
    <div class="container left-container">
      <div class="text-box">
        <h2>{info.day5_temp}°C</h2>
        <div class={weather_codes[info.day5_condition]} />
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
    min-width: 300px;

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
    min-width: 150px;
    width: 40%;
    height: 6em;
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
    justify-content: space-between;
    align-items: center;
    gap: 10px;
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

  .ClearDay {
    height: 58.6px;
    width: 58.6px;
    background-image: url("static/ClearDay.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .ClearNight {
    width: 68px;
    height: 75.5px;
    background-image: url("static/ClearNight.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .CloudRain {
    height: 56px;
    width: 76px;
    background-image: url("static/CloudRain.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .Cloudy {
    height: 50px;
    width: 70px;
    background-image: url("static/Cloudy.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .CloudyDay {
    height: 50px;
    width: 70px;
    background-image: url("static/CloudyDay.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .CloudyNight {
    height: 50px;
    width: 70px;
    background-image: url("static/CloudyNight.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .RainyDay {
    height: 50px;
    width: 70px;
    background-image: url("static/RainyDay.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .RainyNight {
    height: 50px;
    width: 70px;
    background-image: url("static/RainyNight.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .Snow {
    height: 50px;
    width: 70px;
    background-image: url("static/Snow.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .SnowyDay {
    height: 63px;
    width: 65.5px;
    background-image: url("static/SnowyDay.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .SnowyNight {
    height: 50px;
    width: 70px;
    background-image: url("static/SnowyNight.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .Thunder {
    background-image: url("static/Thunder.svg");
    background-size: contain;
    background-repeat: no-repeat;
    height: 50px;
    width: 70px;
  }
</style>

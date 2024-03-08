<script>
  import Current from "./current.svelte";
  import Forecast from "./forecast.svelte";
  export let data;
</script>

<div class="mainpage">
  <div class="current-container">
    <Current />
  </div>
  <div class="forcast-container">
    <Forecast info={data} />
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;400;500&display=swap");
  * {
    font-family: "Red Hat Mono", monospace;
    color: white;
  }

  .mainpage {
    height: 100svh;
    width: 100svw;
    padding: 10px;

    background-image: url(weatherSkyBackDrop.png);
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  @media (max-width: 1300px) {
    .mainpage {
      height: 120rem;
      width: 100svw;
      padding: 10px;

      background-image: url("../../weather/[slug]/weatherSkyBackDrop.png");
      background-size: cover;
      background-repeat: no-repeat;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .current-container {
      height: 100%;
      width: 100%;
    }

    .forcast-container {
      height: 100%;
      width: 100%;
    }
  }

  .current-container {
    height: 90%;
    flex: 1 1 36%;
  }

  .forcast-container {
    flex: 1 1 36%;
    height: 90%;
  }
</style>

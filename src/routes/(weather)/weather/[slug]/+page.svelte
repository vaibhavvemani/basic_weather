<script>
  import Current from "./current.svelte";
  import Country_img from "./country_img.svelte";
  import Forecast from "./forecast.svelte";
</script>

<div class="mainpage">
  <!-- <div class="scroll-container">
    <Country_img />
  </div> -->
  <div class="current-container">
    <Current />
  </div>
  <div class="forcast-container">
    <Forecast />
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;400;500&display=swap");
  * {
    font-family: "Red Hat Mono", monospace;
    color: white;
  }

  .mainpage {
    height: 100vh;
    width: 100vw;
    padding: 10px;

    background-image: url(weatherSkyBackDrop.png);
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  @media (max-width: 800px) {
    .mainpage {
      height: 200vh;
      width: 100vw;
      padding: 10px;

      background-image: url("../../weather/[slug]/weatherSkyBackDrop.png");
      background-size: 100% 100%;
      overflow: scroll;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    /* .scroll-container {
      display: none;
    } */

    .current-container {
      height: 100%;
    }

    .forcast-container {
      height: 100%;
    }
  }

  /* .scroll-container {
    height: 90%;
    flex: 1 1 28%;
    display: none;
  } */

  .current-container {
    height: 90%;
    flex: 1 1 36%;
  }

  .forcast-container {
    flex: 1 1 36%;
    height: 90%;
  }
</style>

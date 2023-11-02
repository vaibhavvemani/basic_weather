<script>
  import Hourly from "./hourly.svelte";
  import Daily from "./daily.svelte";
  import Now from "./now.svelte";
  import Scroll from "./scroll.svelte";
</script>

<div class="mainpage">
  <Scroll />
  <div class="past-future-container">
    <Now />
    <div class="forcast-container">
      <Hourly />
      <Daily />
    </div>
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
    color: black;
    /* background-image: linear-gradient(0deg,#d8eeee,#d8eeee 25%,#64adc9 65%,#005986 90%,#005986); */
    background-image: url(./../../../../../pexels-arnie-chou-1229042.jpg);

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .past-future-container {
    width: 75%;
    height: 90%;

    display: flex;
    gap: 2rem;
  }

  .forcast-container {
    display: flex;
    gap: 2rem;
    flex-direction: column;

    height: 100%;
    width: 100%;
  }
</style>

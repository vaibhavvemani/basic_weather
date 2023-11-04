<script>
  import Hourly from "./hourly.svelte";
  import Daily from "./daily.svelte";
  import Now from "./now.svelte";
  import Scroll from "./scroll.svelte";
</script>

<div class="mainpage">
  <div class="scroll-container">
    <Scroll />
  </div>
  <div class="past-future-container">
    <Now />
  </div>
  <div class="forcast-container">
    <Hourly />
    <Daily />
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
    background-image: url(./../../../../../pexels-arnie-chou-1229042.jpg);

    /* position: relative; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .scroll-container {
    width: 33%;
    height: 90%;
  }

  .past-future-container {
    width: 33%;
    height: 90%;

    /* display: flex; */
    /* gap: 2rem; */
  }

  .forcast-container {
    display: flex;
    gap: 2rem;
    flex-direction: column;

    height: 90%;
    width: 34%;
  }
</style>

<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  let slug = $page.params.slug;

  onMount(async () => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=58c018eea6c840be83c75506232204&q=${slug}`
    );

    const data = await response.json();
  });
</script>

<div class="hourly glass">
  <div class="timeline">
    <div class="container left-container">
      <div class="text-box">
        <h2>Day 1</h2>
        <small>Time: 12:45PM</small>
      </div>
    </div>
    <div class="container right-container">
      <div class="text-box">
        <h2>Day 1</h2>
        <small>Time: 12:45PM</small>
      </div>
    </div>
    <div class="container left-container">
      <div class="text-box">
        <h2>Day 1</h2>
        <small>Time: 12:45PM</small>
      </div>
    </div>
    <div class="container right-container">
      <div class="text-box">
        <h2>Day 1</h2>
        <small>Time: 12:45PM</small>
      </div>
    </div>
    <div class="container left-container">
      <div class="text-box">
        <h2>Day 1</h2>
        <small>Time: 12:45PM</small>
      </div>
    </div>
    <div class="container right-container">
      <div class="text-box">
        <h2>Day 1</h2>
        <small>Time: 12:45PM</small>
      </div>
    </div>
    <div class="container left-container">
      <div class="text-box">
        <h2>Day 1</h2>
        <small>Time: 12:45PM</small>
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
  }

  .timeline::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 65%;
    background: #fff;
    top: 0;
    left: 50%;
    margin-left: -3px;
    z-index: -1;
  }

  .container {
    position: relative;
    width: 50%;
    height: 13%;

    border-radius: 100px;
    background-color: #edadad;
  }

  .left-container {
    left: 0;
  }

  .right-container {
    left: 50%;
  }
</style>

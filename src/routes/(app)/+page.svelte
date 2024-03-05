<script>
  let title = `Welcome to WeatherCast`;
  let lilman = "";
  let i = 0;
  const baby = setInterval(() => {
    lilman += title[i++];
    if (lilman.length === title.length) {
      clearInterval(baby);
    }
  }, 100);
  let babytitle = `etis rehtaew gnirob itna ehT`;
  let babyman = "";
  let k = babytitle.length - 1;
  const boy = setInterval(() => {
    babyman += babytitle[k--];
    if (babyman.length === babytitle.length) {
      clearInterval(boy);
    }
  }, 60);

  let weather = "";
  function reroute() {
    window.open(`/weather/${weather}`);
  }

  function checkKey(e) {
    if (e.key == "Enter") {
      reroute();
    }
  }
</script>

<main>
  <!-- <div class="back"> -->
  <div class="homepagecontainer">
    <div class="textcont">
      <div class="headcont">
        <h1 contenteditable="false" bind:innerText={lilman}>|</h1>
      </div>
      <div class="pcont">
        <h3 contenteditable="false" bind:innerText={babyman}>|</h3>
      </div>
    </div>
    <div class="input">
      <input
        type="text"
        bind:value={weather}
        placeholder="Location"
        on:keydown={checkKey}
      />
      <button on:click={reroute}>Search</button>
    </div>
  </div>
  <!-- </div> -->
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;400;500&display=swap");
  * {
    font-family: "Red Hat Mono", monospace;
    font-size: 30px;
    color: white;
    overflow: hidden;
  }

  main {
    height: 100vh;
    width: 100vw;
    background-image: url("./weatherSkyBackDrop.png");
    background-size: cover;
    background-repeat: no-repeat;
  }

  .homepagecontainer {
    height: 100%;
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
    align-items: center;
    justify-content: center;
    color: #ddd0c8;

    overflow: hidden;
  }

  .textcont {
    margin: 3px;
    height: 40vh;
    width: 600px;
    max-width: 60vw;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .pcont {
    text-align: end;
    border-right: 5px solid #d47871;
    border-bottom: 2px solid #d47871;
    padding-right: 2px;
  }

  .headcont {
    text-align: start;
    border-left: 5px solid #d47871;
    border-top: 2px solid #d47871;
    padding-left: 2px;
  }

  .input {
    width: 9em;
    height: 34px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f99a94;
    border-radius: 10px;
  }

  .input button {
    padding: 0;
    border: 0;
    height: 34px;
    min-width: 6rem;
    background-color: #d47871;
    color: #fff;
    font-size: 20px;
    text-align: center;
    border-radius: 10px;
  }
  .input button:hover {
    background-color: #a1524d;
  }
  .input input {
    height: 34px;
    padding-left: 10px;
    font-size: 20px;
    background-color: #f99a94;
    border-radius: 10px;
    color: #fff;
  }
  .input input:focus {
    outline: none;
  }
</style>

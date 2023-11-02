<div class="daily glass">
  <h1>Daily Forcast</h1>
  <p>Highest tempreatures seen:</p>
  <p>Lowest Tempreatures seen:</p>
  <p>Whatever else this is:</p>
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
    /* box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37); */
  }
  .daily {
    border-radius: 10px;
    height: 90%;
    width: 100%;
    padding: 10px;
  }
</style>

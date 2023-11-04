<div class="hourly glass">
  <h1>Hourly Forcast</h1>
  <div class="card-container">
    <div class="card">
      <p>Hour: 1</p>
      <p>56</p>
    </div>
    <div class="card">
      <p>Hour: 2</p>
      <p>67</p>
    </div>
    <div class="card">
      <p>Hour: 3</p>
      <p>89</p>
    </div>
    <div class="card">
      <p>Hour: 1</p>
      <p>56</p>
    </div>
    <div class="card">
      <p>Hour: 2</p>
      <p>67</p>
    </div>
    <div class="card">
      <p>Hour: 3</p>
      <p>89</p>
    </div>
  </div>
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
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  }
  .hourly {
    border-radius: 10px;
    height: 90%;
    width: 100%;
    padding: 10px;
  }

  .card-container {
    height: 86%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 7px;
  }

  .card {
    height: 45%;
    width: 30%;
    background-color: #12121276;
    border-radius: 5px;
  }
</style>

<header>
  <nav>
    <h1>WeatherCast</h1>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/feedback">Feedback</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>

<slot />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;400;500&display=swap");
  * {
    font-family: "Red Hat Mono", monospace;
    font-size: 30px;
    color: white;
  }

  nav {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-image: linear-gradient(to right, #68909c, #618b97);
    color: #ddd0c8;
  }

  ul {
    display: flex;
    gap: 3rem;
    list-style: none;
  }

  a {
    font-size: 16px;
    text-decoration: none;
    color: #ddd0c8;
  }
</style>

<div class="presentcontainer glass">
	<div class="title-icon">
		<h1>Right Now</h1>
		<!-- <img src={lookin} alt="Condition" class="condition-icon" /> -->
	</div>
	<div class="presentinfo">
		<p>Local Time:</p>
		<p>Temperature: F/C</p>
		<p>Feels like: F/C</p>
		<p>Condition:</p>
		<p>Wind Speeds: mph/kph</p>
		<p>Wind gusts:</p>
		<p>Pressure: mb/in</p>
		<p>Precipitaion: mm/in</p>
		<p>Humidity:</p>
		<p>UV levels:</p>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;400;500&display=swap');
	* {
		font-family: 'Red Hat Mono', monospace;
		color: white;
	}
	* p {
		font-weight: 500;
	}
	.glass {
		background: linear-gradient(135deg, rgba(226, 215, 215, 0.1), rgba(255, 255, 255, 0));
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.18);
		box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
	}
	.presentcontainer {
		/* background-color: #c8c8c847;
		border: 1px solid white;
		box-shadow: inset 10px 10px 20px 20px #a8a8a8a1, inset -10px -10px 40px 50px #a3a3a3a2;
		backdrop-filter: blur(4px); */
		border-radius: 10px;
		height: 100%;
		width: 100%;
		padding: 10px;
	}
	.title-icon {
		display: flex;
		align-items: center;
	}

	.title-icon h1 {
		color: white;
	}
</style>

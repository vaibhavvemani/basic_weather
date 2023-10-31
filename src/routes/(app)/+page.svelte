<script>
	let title = `Welcome to WeatherCast`;
	let lilman = '';
	let i = 0;
	const baby = setInterval(() => {
		lilman += title[i++];
		if (lilman.length === title.length) {
			clearInterval(baby);
		}
	}, 100);

	let babytitle = `erutuf ruoy tciderp emmel no dloH`;
	let babyman = '';
	let k = babytitle.length - 1;
	const boy = setInterval(() => {
		babyman += babytitle[k--];
		if (babyman.length === babytitle.length) {
			clearInterval(boy);
		}
	}, 60);

	let weather = '';
	function reroute() {
		window.open(`http://localhost:5173/weather/${weather}`)
	}
</script>

<main>
	<div class="back" />
	<div class="homepagecontainer">
		<div class="textcont">
			<div class="headcont">
				<h1 contenteditable="true" bind:innerText={lilman}>|</h1>
			</div>
			<div class="pcont">
				<h3 contenteditable="true" bind:innerText={babyman}>|</h3>
			</div>
		</div>
		<div class="input">
			<input type="text" bind:value={weather} /><button
				on:click={reroute}
				>predict</button
			>
		</div>
	</div>
</main>

<style>
	.back {
		height: 93vh;
		width: 100vw;
		background-image: url('weatherSkyBackDrop.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		position: absolute;
		z-index: -1;
	}

	.homepagecontainer {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		justify-content: center;
		height: 25rem;
		color: #DDD0C8;
	}

	.textcont {
		height: 72px;
		width: 375px;
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
		margin-top: 20px;
		display: flex;
		background-color: #f99a94;
		border-radius: 10px;
	}
	.input button {
		padding: 0;
		border: none;
		height: 35px;
		width: 7rem;
		background-color: #d47871;
		color: #fff;
		font-size: 20px;
		text-align: center;
		border-radius: 10px;
	}
	.input button:hover {
		background-color: #dda592;
	}
	.input input {
		padding: 5px;
		font-size: 20px;
		background-color: #f99a94;
		border-radius: 10px;
		color: #fff;
	}
	.input input:focus {
		outline: none;
	}
</style>

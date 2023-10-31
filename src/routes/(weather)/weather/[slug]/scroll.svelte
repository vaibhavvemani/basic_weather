<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let image;
	let slug = $page.params.slug;
	let https_link = `https://api.pexels.com/v1/search?query=${slug}&per_page=1`;
	onMount(async () => {
		const response = await fetch(https_link, {
			headers: {
				Authorization: 'cjJlwujFm4RxUfLziINM2q9qFNiBir2hkAG4vHnzMfaRUbLQJ4f5aK08'
			}
		});
		const data = await response.json();
		console.log(slug);
		image = data.photos[0].src.portrait;
	});
</script>

<div class="countrycontainer">
	<div class="countryimage">
		<img src={image} alt="somethin" />
	</div>
</div>

<style>
	.countrycontainer {
		height: 90%;
		width: 30%;
		margin: 0;
		display: flex;
		align-items: center;
		gap: 10px;
		position: relative;
	}
	.countryimage {
		height: 100%;
		width: 100%;
		padding: 10px;
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 12px;
		position: relative;
	}
	.countryimage img {
		height: 100%;
		width: 100%;
		border-radius: 5px;
		object-fit: cover;
	}
</style>

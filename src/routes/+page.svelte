<script>
	const handleNewWorldClick = () => {
		window.alert("New World Not implemented yet")
	};

	const handleLoadWorldClick = () => {
		window.alert("Load World Not implemented yet")
	};
</script>


<svelte:head>
	<title>Home</title>
	<meta name="description" content="Random tables for rpg" />
</svelte:head>

<section>
	<div class="btn-group">
		<div class="inner-btn-group">
			<h1>RPG Creator</h1>
			<button class="new-world-btn" on:click={handleNewWorldClick}>New World</button>
			<button class="add-world-btn" on:click={handleLoadWorldClick}>Load World</button>
		</div>
	</div>
</section>

<style>
	section {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}


	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		
	}

	.btn-group{
		text-align: center;  
		position: fixed;
		top: 33%;
		left: 23%;
		transform: translate(-50%, -50%);
	}

	.inner-btn-group{
		position:absolute;
		width: 100px;
		top:50%;
		height:50px;
		margin-top: -10em;
	}

	.new-world-btn{
		margin-top: 25px;
	}

	.add-world-btn{
		margin-top: 25px;
	}

</style>

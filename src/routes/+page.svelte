<script>
	let isFrontPageActive = true;

	const handleNewWorldClick = () => {
		isFrontPageActive = false;
	};

	const handleLoadWorldClick = () => {
		window.alert("Load World Not implemented yet")
	};

	const handleBackClick = () => {
		isFrontPageActive = true;
	};
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0">


<svelte:head>
	<title>Home</title>
	<meta name="description" content="Random tables for rpg" />
</svelte:head>

<section>
	{#if isFrontPageActive}	
	
	<div class="btn-group">
		<div class="inner-btn-group">
			<h1>RPG Creator</h1>
			<button class="new-world-btn" on:click={handleNewWorldClick}>New World</button>
			<button class="add-world-btn" on:click={handleLoadWorldClick}>Load World</button>
		</div>
	</div>

	{:else}	

		<div class="grid-container">
			<div><button on:click={handleBackClick}>Neu</button></div> 
			<div ></div> 
			<div ></div> 
			<div class="item">Index</div> 
			<div class="item">Tables</div> 
			<div class="item">Summary</div> 
		</div>

	{/if}
</section>

<style>
	section {
		text-align: center;
		padding: 1em;
	}

	

	.item{
		border: 1px solid #fff;
	}

	.grid-container{
		display: grid; 
  		grid-template-rows: 10% 90%; 
  		grid-template-columns:10% 60% 30%; 
		height: 100vh;
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

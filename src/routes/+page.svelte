<script>
	import RandomTables from '../lib/components/RandomTables.svelte'

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
	<div class="header">
		<button on:click={handleBackClick}>Zurück</button>
	  </div>
	  
	  <div class="index">
		<ul>
		  <li>1. Rassen Tabelle</li>
		</ul>
	  </div>
	  
	  <div class="main">
		<h2>Tabellen</h2>
		<RandomTables/>
	  </div>

	  <div class="summary">
		<h2>Zusammenfassung</h2>
		<div>Charakter 1</div>
		<div>Mensch</div>
		<div>Spasst</div>
		<p></p>
		<div>Charakter 2</div>
		<div>Mensch</div>
		<div>Nicht Spasst</div>
		<p></p>
		<div>Charakter 3</div>
		<div>Mensch</div>
		<div>Spasst</div>
		<p></p>
		<div>Charakter 4</div>
		<div>Mensch</div>
		<div>Spasst</div>
		<p></p>
		<div>Charakter5</div>
		<div>Mensch</div>
		<div>Stark</div>

	  </div>
	  

	{/if}
</section>

<style>
	section {
		text-align: center;
		padding: 1em;
	}

	* {
  box-sizing: border-box;
}

.header {
  padding: 15px;
}

.index {
  visibility: hidden;
  width: 20%;
  float: left;
  padding: 5px;
  border: 1px solid grey;
}

ul{
	padding: 0;
}

li{
	list-style-type: none;
}

.main {
  width: 100%;
  float: left;
  padding: 15px;
  border: 1px solid grey;
  
}



.summary {
  width: 100%;
  float: left;
  padding: 15px;
  border: 1px solid grey;
}

	h1 {
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
		
	}

	h2{
		font-size: 2em;
		font-weight: 60;
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

	@media only screen and (min-width: 768px) {
  .main {
    width: 50%;
  }
  .index{
	visibility: visible;
  }
  .summary{
	width: 30%;
  }
}
</style>

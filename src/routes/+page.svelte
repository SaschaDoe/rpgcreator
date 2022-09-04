<script>
	import { fade } from 'svelte/transition';
	import RandomTable from '../lib/components/RandomTable.svelte'
	import {getAllTableTitles} from '../lib/tableData.js'
	import {allTables} from '../lib/tableData.js'
	import Summary from '../lib/components/summary.svelte'

	
		let isIndexShown = true;
		let allTitles = getAllTableTitles()
		
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
	
		const handleIndexDropdown = () => {
			if (isIndexShown){
	
				isIndexShown = false;
			}else{
				isIndexShown = true;
			}
			
		};
	
		let isToSummaryClicked = false;
		const handleToSummaryClick = () => {
			if (isToSummaryClicked){
	
				isToSummaryClicked = false;
			}else{
				isToSummaryClicked = true;
			}
			
		};
	
		
		// @ts-ignore
		function scrollIntoView({ target }) {
			const el = document.querySelector(target.getAttribute('href'));
			if (!el) return;
		el.scrollIntoView({
		  behavior: 'smooth'
		});
	  }
	</script>
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	
	<svelte:head>
		<title>RpgCreator</title>
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
		<div class="header" id="header">
			<button on:click={handleBackClick}>Zurück</button>
		</div>
	
		<a class="to-summary-btn" href={"#summary-header"} on:click|preventDefault={scrollIntoView}>\|/</a>
		<a class="to-index-btn" href={"#header"} on:click|preventDefault={scrollIntoView}>/|\</a>
		
		  {#if isIndexShown}
		  <div transition:fade class="index">
			<ul>
				<button on:click={handleIndexDropdown} class="index-dropdown-btn">Einklappen</button>
				{#each allTitles as specificTtitle}
				<li>
					<a href={"#"+specificTtitle} on:click|preventDefault={scrollIntoView}>{specificTtitle}</a>
				</li>
				{/each}
			</ul>
		  </div>
		  {:else}
			  <div class="index-dropdown">
				  <div>
					<button on:click={handleIndexDropdown}>Aufklappen</button>
				</div>
			</div>
		  {/if}
		  
		  <div class="main">
			<h2 id="1">Tabellen</h2>
				
			{#each allTables as table}
			<div id={table.title}>
				<RandomTable 
					  name={table.title} 
					  explanation={table.explanation} 
					  role={table.role} 
					  attributeName={table.attributeName} 
					  contents={table.contents} />
					</div>
			  {/each}
	
		  </div>
	
		  <div class="summary">
			<Summary></Summary>
		  </div>
		  
		{/if}
	</section>
	
	<style>
		.summary {
			width: 100%;
			float: left;
			padding: 15px;
			border: 1px solid grey;
			overflow: auto;
		}
		section {
			text-align: center;
		}
	
		* {
	  box-sizing: border-box;
	}
	
	.header {
	display: flex;
		
	  align-content: left;
	}
	
	.to-summary-btn{
		position: fixed;
		top: 1em;
		right: 1em;
		height: 25px;
		width: 25px;
		z-index: 7;
		color: black;
	}
	
	.to-index-btn{
		position: fixed;
		top: 1em;
		right: 2em;
		height: 25px;
		width: 25px;
		z-index: 7;
		color: black;
	}
	
	.index {
	  width: 100%;
	  padding: 5px;
	  border: 1px solid grey;
	  height: 200px;
	  overflow: auto;
	}
	
	.index-dropdown {
	  width: 100%;
	  padding: 5px;
	  border: 1px solid grey;
	  height: auto;
	  overflow: auto;
	}
	
	ul{
		padding: 0;
	}
	
	li{
		list-style-type: none;
	}
	
	.main {
		height: 550px;
		overflow: auto;
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
	
		@media only screen and (min-width: 1025px) {
	  .main {
		width: 50%;
		height: 1000px;
	  }
	  .index{
		float: left;
		width: 20%;
		height: 1000px;
		overflow: hidden;
	  }
	  .index-dropdown{
		float: left;
		width: 20%;
		height: 1000px;
		overflow: hidden;
	  }
	
	  .to-summary-btn{
		display: none;
	  }
	
	  .to-index-btn{
		display: none;
	  }
	
	  .summary{
		width: 30%;
		height: 1000px;
	  }
	  .index-dropdown-btn{
		display: none;
	  }
	  
	}
	</style>
	
<script>
    import {roleDice} from "./../diceRole"
    import {isInsideRole} from "../tableData"

    export let name = "title missing";
    export let explanation = "explanation missing"
    export let role = "role missing"
    export let attributeName = "attribute name missing"
    export let contents = [
        {role: '1', message: 'what happens', id: 1},
        {role: '2', message: 'what happens now', id: 2},
    ];
    export let forWhichGroup = "chars"
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    // when the handler is triggered in on:click
    // can subscribe to the on:close message in our App.svelte
    // and do what's needed
    const diceResultHandler = () => dispatch('diceRoled', {
			diceResult: diceResult.toString(),
            tableName: name,
            forWhichGroup: forWhichGroup,
            content: contents.filter((content) => isInsideRole(content.role,diceResult))[0].message
		});
    let diceResult = 0;

    const handleRoleClick = (diceRoleString = "") => {
        diceResult = roleDice(diceRoleString);
        diceResultHandler();
	};

</script>


<h2>{name}</h2>
<div>{explanation}</div>
<div><button on:click={() => handleRoleClick(role)}>{role}</button></div>
<table>
    <tr>
        <th>Wurf</th>
        <th>{attributeName}</th>
      </tr>
    {#each contents as tableEntry}
    {#if  isInsideRole(tableEntry.role, diceResult)}
    <tr id="tr{tableEntry.id}" class="greenFlickerClass">
        <td>{tableEntry.role}</td>
        <td>{tableEntry.message}</td>
    </tr>
    {:else}
    <tr id="tr{tableEntry.id}">
        <td>{tableEntry.role}</td>
        <td>{tableEntry.message}</td>
    </tr>
    {/if}

    {/each}

  </table> 
  <p></p>

<style>
table{
	border: 1px solid;
    width: 100%;
	
}

th{
    border: 1px solid;
}

td{
    border: 1px solid;
    width: 75px;
}

td+td{
    border: 1px solid;
    width: auto;
}

h2{
    font-weight: bold;
    text-align: left;
}

div{
    text-align: left;
}

button{
    margin: 5px 0px;
}

.greenFlickerClass{
    -webkit-animation-name: greenFlicker; 
    -webkit-animation-iteration-count: 1;  
    -webkit-animation-duration: 2s; 
}

@-webkit-keyframes greenFlicker {  
    0% { background-color: transparent; }
    50% { background-color: green; }
    100% { background-color: transparent; }
}
    
</style>
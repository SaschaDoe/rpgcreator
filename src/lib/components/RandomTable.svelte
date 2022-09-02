<script>
import { each } from "svelte/internal";


    export let name = "title missing";
    export let explanation = "explanation missing"
    export let role = "role missing"
    export let attributeName = "attribute name missing"
    export let contents = [
        {role: '1', message: 'what happens', id: 1},
        {role: '2', message: 'what happens now', id: 2},
    ];

</script>
<h2>{name}</h2>
<div>{explanation}</div>
<div><button>{role}</button></div>
<table>
    <tr>
        <th>Wurf</th>
        <th>{attributeName}</th>
      </tr>
    {#each contents as tableEntry}
        <tr>
            <td>{tableEntry.role}</td>
            <td>{tableEntry.message}</td>
        </tr>
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
    
</style>
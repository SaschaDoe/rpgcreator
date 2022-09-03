<script>
    export let name = "no name";
    export let race = "no race";
</script>

<div class="container">
    <p class="name">{name}</p>
    <p>{"Klasse: "+race}</p>
</div>

<style>
    .container{
        border:1px solid black;
    }
    .name{
        font-weight: bold;
    }

    p{
        text-align: left;
        padding: 5px
    }
</style>
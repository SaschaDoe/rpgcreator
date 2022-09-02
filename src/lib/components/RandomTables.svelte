<script>
  import RandomTable from './RandomTable.svelte'


   let raceTableContent = [
        {role: '1-3', message: 'Mensch', id: 1},
        {role: '4-5', message: 'Halb Mensch halb ...', id: 2},
        {role: '6', message: 'Anderes Fantasiewesen', id: 3},
    ];
</script>

<RandomTable title="Rassen" explanation="Würfle deine Rasse aus" role="1w6" attributeName="Rasse" contents={raceTableContent} />
<RandomTable title="Klassen"/>
<style>
    
</style>
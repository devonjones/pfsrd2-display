<script>
    // TODO: aonid
    // TODO: game-obj
    // TODO: name
    // TODO: stat_block.image

    import Creature1_0 from '../1.0/Creature.svelte'
    import Creature1_1 from '../1.1/Creature.svelte'

    export let creature;
    let schemas = [1.0, 1.1]
</script>

<director>
    {#if creature.stat_block}
        {#if creature.schema_version == 1.0}
            <Creature1_0 creature={creature}/>
        {:else if creature.schema_version == 1.1}
            <Creature1_1 creature={creature}/>
        {:else}
            <h1><span>{creature.name} cannot be rendered</span></h1>
            We can only render schemas in these versions {JSON.stringify(schemas)}.
            Document is schema {creature.schema_version}.
        {/if}
    {/if}
</director>

<style>
    director {
		background-color: #000000;
		color: #FFFFFF;
    }
       
	h1 {
        color: #c8bf8f;
        background-color: #452624;
		text-transform: uppercase;
		font-size: 1.5em;
		font-weight: 700;
        display: flex;
        justify-content: flex-start;
        border-radius: 3px;
        border-style: solid;
        border-width: 0px;
        border-bottom-width: 3px;
        border-color: #c8bf8f;
        padding-left: 9px;
        padding-right: 9px
	}
</style>
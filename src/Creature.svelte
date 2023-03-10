<script>
	import Traits from './Traits.svelte'
	import TopMatter from './TopMatter.svelte'
    import Offense from './Offense.svelte'
    import Defense from './Defense.svelte'
    export let creature;
</script>

<creature>
    {#if creature.stat_block}
        <h1><span>{creature.stat_block.name}</span><span style="margin-left:auto; margin-right:0">Creature {creature.stat_block.creature_type.level}</span></h1>
        <Traits stat_block={creature.stat_block}/>
        <TopMatter stat_block={creature.stat_block}/>
        <hr/>
        <Defense defense={creature.stat_block.defense}/>
        <hr/>
        <Offense offense={creature.stat_block.offense}/>
        <hr/>
    {/if}
</creature>

<style>
    creature {
		background-color: #000000;
    }
       
	h1 {
        color: #c8bf8f;
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

    hr {
        color: #c8bf8f;
        border-style: solid;
        text-align: left;
        width:100%
    }

    @media (min-width: 640px) {
		creature {
			max-width: none;
		}
	}
</style>
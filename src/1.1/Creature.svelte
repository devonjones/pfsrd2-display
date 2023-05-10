<script>
    // TODO: aonid
    // TODO: game-obj
    // TODO: name
    // TODO: stat_block.image

    import Traits from '../base/Traits.svelte'
    import CreatureType from '../base/CreatureType.svelte'
	import TopMatter from '../base/TopMatter.svelte'
    import Offense from '../base/Offense.svelte'
    import Defense from '../base/Defense.svelte'
    import Section from './Section.svelte'
    import Sidebar from './Sidebar.svelte'

    export let creature;
</script>

<creature>
    {#if creature.stat_block}
        <h1><span>{creature.stat_block.name}</span><span style="margin-left:auto; margin-right:0">Creature {creature.stat_block.creature_type.level}</span></h1>
        <Traits stat_block={creature.stat_block}/>
        <CreatureType creature_type={creature.stat_block.creature_type} sources={creature.sources} schema={creature.schema_version}/>
        <hr/>
        <TopMatter stat_block={creature.stat_block}/>
        <hr/>
        <Defense defense={creature.stat_block.defense}/>
        <hr/>
        <Offense offense={creature.stat_block.offense}/>
        <div id=sections>
            {#each creature.sections as section}
                {#if section.subtype != "sidebar"}
                    <Section section={section} level=2/>
                {:else}
                    <Sidebar sidebar={section}/>
                {/if}
            {/each}
        </div>
    {/if}
</creature>

<style>
    creature {
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

    #sections {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
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
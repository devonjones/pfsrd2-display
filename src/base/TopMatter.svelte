<script>
    // TODO: creature_type.rarity
    // TODO: creature_type.alignment
    // TODO: creature_type.size
    // TODO: creature_type.creature_types
    // TODO: creature_type.pfs
    // TODO: creature_type.family
    // TODO: creature_type.grafts

    import Ability from './Ability.svelte';
    import Gear from './Gear.svelte';
	import Senses from './Senses.svelte';
	import Languages from './Languages.svelte';
	import Skills from './Skills.svelte';
	import Statistics from './Statistics.svelte';
    export let stat_block;
</script>

<top_matter>
    <Senses senses={stat_block.senses}/>
    {#if stat_block.statistics.languages}
        <Languages languages={stat_block.statistics.languages}/>
    {/if}
    {#if stat_block.statistics.skills}
        <Skills skills={stat_block.statistics.skills}/>
    {/if}
    <Statistics stats={stat_block.statistics}/>
    {#if stat_block.interaction_abilities}
        {#each stat_block.interaction_abilities as ability}
            <Ability ability={ability}/>
        {/each}
    {/if}
    {#if stat_block.gear}
        <Gear gear={stat_block.gear}/>
    {/if}
</top_matter>

<style>
    top_matter {
		padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0px;
        padding-left: 15px;
	}
</style>
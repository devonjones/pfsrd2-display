<script>
    // TODO: creature_type.rarity
    // TODO: creature_type.alignment
    // TODO: creature_type.size
    // TODO: creature_type.creature_types
    // TODO: creature_type.pfs

	import Knowledge from './Knowledge.svelte';
	import Grafts from './Grafts.svelte';
	import Sources from './Sources.svelte';
    export let creature_type;
    export let sources;
</script>

<creature_type>
    <Sources sources={sources}/>
    {#if creature_type.grafts || creature_type.family}
        <Grafts grafts={creature_type.grafts} family={creature_type.family}/>
    {/if}
    {#if creature_type.knowledge}
        <Knowledge knowledges={creature_type.knowledge}/>
    {/if}
</creature_type>

<style>
    creature_type {
		padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0px;
        padding-left: 15px;
	}
</style>
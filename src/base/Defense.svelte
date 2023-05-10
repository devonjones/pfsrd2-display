<script>
    import Ability from './Ability.svelte';
	import Armor from './Armor.svelte'
	import Hitpoints from './Hitpoints.svelte'
    export let defense;
</script>

<defense>
    <Armor defense={defense}/>
    {#each defense.hitpoints as hp}
        <Hitpoints hp={hp}/>
    {/each}
    {#if defense.reactive_abilities}
        {#each defense.reactive_abilities as ability}
            <Ability ability={ability}/>
        {/each}
    {/if}
    {#if defense.automatic_abilities}
        {#each defense.automatic_abilities as ability}
            <Ability ability={ability}/>
        {/each}
    {/if}
</defense>

<style>
	defense {
		padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0px;
        padding-left: 15px;
	}
</style>
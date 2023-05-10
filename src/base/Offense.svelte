<script>
    // TODO: offensive_action.name
    // TODO: offensive_action.offensive_action_type

    import Ability from './Ability.svelte';
    import Affliction from './Affliction.svelte';
    import Attack from './Attack.svelte';
    import Speed from './Speed.svelte';
    import Spells from './Spells.svelte';
    export let offense;
</script>

<offense>
    <Speed speeds={offense.speed}/>
    {#each offense.offensive_actions as offensive_action}
        {#if offensive_action.attack}
            <Attack attack={offensive_action.attack}/>
        {/if}
        {#if offensive_action.ability}
            <Ability ability={offensive_action.ability}/>
        {/if}
        {#if offensive_action.affliction}
            <Affliction affliction={offensive_action.affliction}/>
        {/if}
        {#if offensive_action.spells}
            <Spells spells={offensive_action.spells}/>
        {/if}
    {/each}
</offense>

<style>
	offense {
		padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0px;
        padding-left: 15px;
	}
</style>
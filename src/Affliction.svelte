<script>
	import {format_traits, format_saving_throw, format_text_semi} from './monsterlib';
	import Action from './Action.svelte'

    function format_affliction(affliction) {
        // TODO: Links

        let affliction_text = ""
        if (affliction.text) {
            affliction_text = affliction.text + " ";
        }
        return format_text_semi(affliction_text);
    }


    export let affliction;
</script>

<affliction>
    <b>{affliction.name}</b>{#if affliction.action}<Action action={affliction.action}/>{/if}{format_traits(affliction.traits)}
    {format_affliction(affliction)}
    {#if affliction.requirements}
        <b>Requirements</b> {format_text_semi(affliction.requirements)}
    {/if}
    {#if affliction.effect}
        <b>Effect</b> {format_text_semi(affliction.effect)}
    {/if}
    {#if affliction.saving_throw}
        <b>Saving Throw</b> {format_text_semi(format_saving_throw(affliction))}
    {/if}
    {#if affliction.onset}
        <b>Onset</b> {format_text_semi(affliction.onset)}
    {/if}
    {#if affliction.maximum_duration}
        <b>Maximum Duration</b> {format_text_semi(affliction.maximum_duration)}
    {/if}
    {#each affliction.stages as stage}
        <b>{stage.name}</b> {format_text_semi(stage.text)}&nbsp;
    {/each}
    {#if affliction.special}
        <b>Special</b> {affliction.special}
    {/if}
</affliction>

<style>
    b {
        color: #c8bf8f;
    }

	affliction {
		padding: 1em;
        display: inline-block;
        text-align: left;
        padding: 0px;
        color: #ffffff;
        text-indent: -15px;
	}
</style>
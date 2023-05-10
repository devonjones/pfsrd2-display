<script>
	import {format_traits, format_saving_throw, format_text_semi} from './monsterlib';
	import Action from './Action.svelte'
    import {markdown_inline} from '../markdown/markdown';

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
    <b>{@html markdown_inline(affliction.name)}</b>{#if affliction.action}<Action action={affliction.action}/>{/if}{format_traits(affliction.traits)}
    {@html format_affliction(affliction)}
    {#if affliction.requirements}
        <b>Requirements</b> {@html format_text_semi(affliction.requirements)}
    {/if}
    {#if affliction.effect}
        <b>Effect</b> {@html format_text_semi(affliction.effect)}
    {/if}
    {#if affliction.saving_throw}
        <b>Saving Throw</b> {@html format_text_semi(format_saving_throw(affliction))}
    {/if}
    {#if affliction.onset}
        <b>Onset</b> {@html format_text_semi(affliction.onset)}
    {/if}
    {#if affliction.maximum_duration}
        <b>Maximum Duration</b> {@html format_text_semi(affliction.maximum_duration)}
    {/if}
    {#if affliction.stages}
        {#each affliction.stages as stage}
            <b>{stage.name}</b> {@html format_text_semi(stage.text)}&nbsp;
        {/each}
    {/if}
    {#if affliction.special}
        <b>Special</b> {@html markdown_inline(affliction.special)}
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
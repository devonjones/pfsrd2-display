<script>
	import {format_modifiers, format_range, format_damage, format_traits, format_text_semi, format_saving_throw} from './monsterlib';
	import Action from './Action.svelte'

    function format_ability(ability) {
        // TODO: Links
        
        let ability_text = ""
        let textlist = []
        if (ability.range) {
            textlist.push(format_range(ability));
        }
        if (ability.damage) {
            textlist.push(format_damage(ability.damage));
        }
        if (ability.saving_throw) {
            textlist.push(format_saving_throw(ability));
        }
        if (textlist.length > 0) {
            ability_text += textlist.join(", ") + "; "
        }
        if (ability.text) {
            ability_text += ability.text + " ";
        }
        ability_text += format_modifiers(ability)
        return format_text_semi(ability_text);
    }

    export let ability;
</script>

<ability>
    <b>{ability.name}</b>{#if ability.action}<Action action={ability.action}/>{/if}{format_traits(ability.traits)}
    {format_ability(ability)}
    {#if ability.requirement}
        <b>Requirements</b> {format_text_semi(ability.requirement)}
    {/if}
    {#if ability.cost}
        <b>Cost</b> {format_text_semi(ability.cost)}
    {/if}
    {#if ability.prerequisite}
        <b>Prerequisites</b> {format_text_semi(ability.prerequisite)}
    {/if}
    {#if ability.frequency}
        <b>Frequency</b> {format_text_semi(ability.frequency)}
    {/if}
    {#if ability.trigger}
        <b>Trigger</b> {format_text_semi(ability.trigger)}
    {/if}
    {#if ability.effect}
        <b>Effect</b> {format_text_semi(ability.effect)}
    {/if}
    {#if ability.critical_success}
        <br/><b>Critical Success</b> {ability.critical_success}
    {/if}
    {#if ability.success}
        <br/><b>Success</b> {ability.success}
    {/if}
    {#if ability.failure}
        <br/><b>Failure</b> {ability.failure}
    {/if}
    {#if ability.critical_failure}
      <br/><b>Critical Failure</b> {ability.critical_failure}
    {/if}
</ability>

<style>
    b {
        color: #c8bf8f;
    }

	ability {
		padding: 1em;
        display: inline-block;
        text-align: left;
        padding: 0px;
        color: #ffffff;
        text-indent: -15px;
	}
</style>
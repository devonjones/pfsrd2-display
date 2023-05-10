<script>
	import {format_modifiers} from './monsterlib';
    import {markdown_inline} from '../markdown/markdown';
    import AbilitySummary from './AbilitySummary.svelte'

    function format_hp(hp) {
        let hp_text = "" + hp.hp;
        if (hp.name) {
            hp_text += " [" + hp.name + "]"
        }
        if (hp.squares) {
            hp_text += " (" + hp.squares + " squares)"
        }
        return hp_text;
    }

    function format_thresholds(thresholds) {
        let threshold_list = []
        if (thresholds) {
            for (let threshold of thresholds) {
                let text = threshold.value
                text += " (" + threshold.squares + " squares)"
                threshold_list.push(text)
            }
        }
        return threshold_list.join(", ");
    }

    function format_hardness(hardness) {
        if (hardness) {
            return "" + hardness;
        }
        return ""
    }

    function format_protections(protections) {
        // TODO: Link

        let protection_list = []
        if (protections) {
            for (let protection of protections) {
                let text = protection.name
                if (protection.value) {
                    text += " " + protection.value
                }
                text = markdown_inline(text)
                text += format_modifiers(protection)
                protection_list.push(text)
            }
        }
        return protection_list.join(", ");
    }

    export let hp;
</script>

<hitpoints>
    <b>HP</b> {format_hp(hp)};
    {#if hp.automatic_abilities}
        &nbsp;<AbilitySummary abilities={hp.automatic_abilities}/>;
    {/if}

    {#if hp.thresholds}
        <b>Thresholds</b> {format_thresholds(hp.thresholds)};
    {/if}
    {#if hp.hardness}
        <b>Hardness</b> {format_hardness(hp.hardness)};
    {/if}
    {#if hp.immunities}
        <b>Immunities</b> {@html format_protections(hp.immunities)};
    {/if}
    {#if hp.resistances}
        <b>Resistances</b> {@html format_protections(hp.resistances)};
    {/if}
    {#if hp.weaknesses}
        <b>Weaknesses</b> {@html format_protections(hp.weaknesses)};
    {/if}
</hitpoints>

<style>
    b {
        color: #c8bf8f;
    }

    li {
        text-indent: -15px
    }
	hitpoints {
		padding: 1em;
        display: inline-block;
        text-align: left;
        padding: 0px;
        color: #ffffff;
        text-indent: -15px
	}
</style>
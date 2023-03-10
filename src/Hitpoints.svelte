<script>
	import {format_modifiers, format_number} from './monsterlib';
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
        // TODO: Handle Links
        let protection_list = []
        if (protections) {
            for (let protection of protections) {
                let text = protection.name
                if (protection.value) {
                    text += " " + protection.value
                }
                text += format_modifiers(protection)
                protection_list.push(text)
            }
        }
        return protection_list.join(", ");
    }

    export let hp;
    let hp_text = format_hp(hp);
    let threshold_text = format_thresholds(hp.thresholds);
    let hardness_text = format_hardness(hp.hardness);
    let immunities_text = format_protections(hp.immunities)
    let resistances_text = format_protections(hp.resistances)
    let weaknesses_text = format_protections(hp.weaknesses)
</script>

<hitpoints>
    <b>HP</b> {hp_text};
    {#if hp.automatic_abilities}
        &nbsp;<AbilitySummary abilities={hp.automatic_abilities}/>;
    {/if}

    {#if hp.thresholds}
        <b>Thresholds</b> {threshold_text};
    {/if}
    {#if hp.hardness}
        <b>Hardness</b> {hardness_text};
    {/if}
    {#if hp.immunities}
        <b>Immunities</b> {immunities_text};
    {/if}
    {#if hp.resistances}
        <b>Resistances</b> {resistances_text};
    {/if}
    {#if hp.weaknesses}
        <b>Weaknesses</b> {weaknesses_text};
    {/if}
</hitpoints>

<style>
    b {
        color: #c8bf8f;
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
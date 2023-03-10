<script>
	import {format_modifiers, format_number} from './monsterlib';

    function format_ac(ac) {
        let ac_text = "" + ac.value;
        ac_text += format_modifiers(defense.ac)
        return ac_text;
    }

    function format_save(save) {
        // TODO: Format this manually instead of using text
        let save_text = format_number(save.value);
        save_text += format_modifiers(save)
        return save_text;
    }

    export let defense;
    let ac_text = format_ac(defense.ac);
    let fort_text = format_save(defense.saves.fort)
    let ref_text = format_save(defense.saves.ref)
    let will_text = format_save(defense.saves.will)
    let modifiers_text = format_modifiers(defense.saves, false)
</script>

<armor>
    <b>AC</b> {ac_text};
    <b>Fort</b> {fort_text},
    <b>Ref</b> {ref_text},
    <b>Will</b> {will_text}; {modifiers_text}
</armor>

<style>
    b {
        color: #c8bf8f;
    }

	armor {
		padding: 1em;
        display: inline-block;
        text-align: left;
        padding: 0px;
        color: #ffffff;
        text-indent: -15px
	}
</style>
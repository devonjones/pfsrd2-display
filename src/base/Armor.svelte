<script>
	import {format_modifiers, format_number} from './monsterlib';

    function format_ac(ac) {
        let ac_text = "" + ac.value;
        ac_text += format_modifiers(defense.ac)
        return ac_text;
    }

    function format_save(save) {
        // TODO: Name?

        let save_text = format_number(save.value);
        save_text += format_modifiers(save)
        return save_text;
    }

    export let defense;
</script>

<armor>
    <b>AC</b> {@html format_ac(defense.ac)};
    <b>Fort</b> {@html format_save(defense.saves.fort)},
    <b>Ref</b> {@html format_save(defense.saves.ref)},
    <b>Will</b> {@html format_save(defense.saves.will)}; {@html format_modifiers(defense.saves, false)}
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
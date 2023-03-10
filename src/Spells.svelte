<script>
	import {format_saving_throw, format_number, format_text_semi} from './monsterlib';
    import SpellList from './SpellList.svelte';
    // TODO: spell_list

    function format_spells(spells) {
        let spells_text = "";
        let textlist = []
        if (spells.saving_throw) {
            textlist.push(format_saving_throw(spells));
        }
        if (spells.spell_attack) {
            textlist.push("attack " + format_number(spells.spell_attack));
        }
        if (spells.focus_points) {
            textlist.push(format_number(spells.focus_points) + " Focus Points");
        }
        if (spells.notes) {
            textlist.push(spells.notes);
        }
        if (textlist.length > 0) {
            spells_text += textlist.join(", ");
        }
        return format_text_semi(spells_text);
    }

    function format_spell_list_name(spell_list) {
        // TODO: level?
        let spell_list_text = "";
        if (spell_list.cantrips) {
            spell_list_text += "Cantrips " + spell_list.level_text
        } else if (spell_list.constant) {
            spell_list_text += "Constant " + spell_list.level_text
        } else {
            spell_list_text += spell_list.level_text
        }
        return spell_list_text;
    }

    function format_spell(spell) {
        let spell_text = "";
        spell_text += spell.name;
        if (spell.count_text) {
            spell_text += " (" + spell.count_text + ")"
        } else if (spell.count && spell.count > 1) {
            spell_text += " (" + spell.count + ")"
        }
        return spell_text;
    }

    function format_spell_list(spells) {
        //TODO: Links
        let spells_list = []
        for (let spell of spells) {
            spells_list.push(format_spell(spell));
        }
        return spells_list.join(", ")
    }

    export let spells;
</script>

<spells>
    <b>{spells.spell_tradition} {spells.spell_type}</b> {format_spells(spells)}
    {#each spells.spell_list as spell_list}
        <br><b>{format_spell_list_name(spell_list)}</b>
        {format_spell_list(spell_list.spells)}
    {/each}
</spells>

<style>
    b {
        color: #c8bf8f;
    }

    spells {
		padding: 1em;
        display: inline-block;
        text-align: left;
        padding: 0px;
        color: #ffffff;
        text-indent: -15px
	}
</style>
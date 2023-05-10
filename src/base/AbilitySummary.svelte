<script>
	import {format_modifiers, format_range} from './monsterlib';
    import {markdown_inline} from '../markdown/markdown';

    function format_ability(ability) {
        // Hitpoints: ability_type, links, modifiers, name, subtype, type, value
        // Languages: ability_type, links, modifiers, name, subtype, type
        // TODO: Links

        let ability_text = markdown_inline(ability.name);
        if (ability.value) {
            ability_text += " " + ability.value;
        }
        ability_text += format_range(ability)
        ability_text += format_modifiers(ability)
        return ability_text;
    }

    function format_abilities(abilities) {
        let abilitylist = []
        for (let ability of abilities) {
            abilitylist.push(format_ability(ability));
        }
        return abilitylist.join(", ")
    }

    export let abilities;
</script>

<abilities>
    {@html format_abilities(abilities)}<br>
</abilities>

<style>
	abilities {
		padding: 1em;
        display: inline-block;
        text-align: left;
        padding: 0px;
        color: #ffffff;
        text-indent: 0px;
	}
</style>
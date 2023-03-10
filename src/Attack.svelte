<script>
	import {capitalize, format_damage, format_number} from './monsterlib';
	import Action from './Action.svelte'

    function format_attack(attack) {
        // TODO: Links
        let attack_text = " ";
        attack_text += attack.weapon;
        if (attack.bonus.bonuses.length > 0) {
            attack_text += " " + format_number(attack.bonus.bonuses[0]);
        }
        if (attack.bonus.bonuses.length > 1) {
            // TODO: Link
            attack_text += " [";
            attack_text += attack.bonus.bonuses.slice(1).map(x => format_number(x)).join("/")
            attack_text += "]";
        }

        return attack_text;
    }

    function format_traits(traits) {
        if (traits) {
            let trait_list = [];
            for (let trait of traits) {
                let trait_text = trait.name
                if (trait.value) {
                    trait_text += " " + trait.value
                }
                trait_list.push(trait_text)
            }
            return " (" + trait_list.join(", ") + ")";
        }
        return "";
    }

    export let attack;
    let attack_text = format_attack(attack);
    let trait_text = format_traits(attack.traits);
    let damage_text = format_damage(attack.damage);
</script>
<attack>
    <b>{capitalize(attack.attack_type)}</b>{#if attack.action}<Action action={attack.action}/>{/if}
    {attack_text}{trait_text}, <b>Damage</b> {damage_text}
</attack>

<style>
    b {
        color: #c8bf8f;
    }

	attack {
		padding: 1em;
        display: inline-block;
        text-align: left;
        padding: 0px;
        color: #ffffff;
        text-indent: -15px;
	}
</style>
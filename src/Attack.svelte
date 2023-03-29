<script>
	import {format_traits, format_damage, format_number} from './monsterlib';
	import Action from './Action.svelte'

    function format_attack(attack) {
        // TODO: Links
        // TODO: attack_type ?

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


    export let attack;
</script>

<attack>
    <b>{attack.name}</b>{#if attack.action}<Action action={attack.action}/>{/if}
    {format_attack(attack)}{format_traits(attack.traits)}, <b>Damage</b> {format_damage(attack.damage)}
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
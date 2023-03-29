<script>
	import {format_modifiers, format_number} from './monsterlib';

    function format_skill(skill) {
        // TODO: Link

        let skill_text = skill.name + " ";
        skill_text += format_number(skill.value)
        skill_text += format_modifiers(skill)
        return skill_text;
    }

    function format_skills(skills) {
        let skillstext = []
        for (let skill of skills) {
            skillstext.push(format_skill(skill));
        }
        return skillstext.join(", ")
    }

    export let skills;
</script>

<skills>
    <b>Skills</b> {format_skills(skills)}
</skills>

<style>
    b {
        color: #c8bf8f;
    }

	skills {
		padding: 1em;
        display: inline-block;
        text-align: left;
        padding: 0px;
        color: #ffffff;
        text-indent: -15px
	}
</style>
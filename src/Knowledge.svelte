<script>
    function format_skills(knowledge) {
        if (knowledge.skills) {
            let skill_list = []
            for (let skill of knowledge.skills) {
                // TODO: Link
                skill_list.push(skill.name);
            }
            return "(" + skill_list.join(", ") + ")";
        }
        return "";
    }

    // TODO: Link
    export let knowledges;
</script>

<knowledge>
    {#each knowledges as knowledge}
        <b>{knowledge.name}</b> {format_skills(knowledge)} DC {knowledge.dc};&nbsp;
    {/each}
</knowledge>

<style>
    b {
        color: #c8bf8f;
    }

    knowledge {
		padding: 1em;
        display: inline-block;
        text-align: left;
        padding: 0px;
        color: #ffffff;
        text-indent: -15px
	}
</style>
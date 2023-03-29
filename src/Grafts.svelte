<script>
	import {format_modifiers} from './monsterlib';

    function format_graft(graft) {
        // TODO: Link

        let graft_text = graft.name;
        graft_text += format_modifiers(graft)
        return graft_text;
    }

    function format_grafts(grafts) {
        let graftslist = []
        for (let graft of grafts) {
            graftslist.push(format_graft(graft));
        }
        return graftslist.join(" ")
    }

    export let grafts;
    export let family;
</script>

<grafts>
    {#if family}
        <b>Family</b> {family};&nbsp;
    {/if}
    {#if grafts}
        {format_grafts(grafts)}
    {/if}
</grafts>

<style>
    b {
        color: #c8bf8f;
    }

    grafts {
		padding: 1em;
        display: inline-block;
        text-align: left;
        padding: 0px;
        color: #ffffff;
        text-indent: -15px
	}
</style>
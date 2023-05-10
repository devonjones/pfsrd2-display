<script>
	import {format_number} from './monsterlib';
    export let stats;
</script>

<skills>
    <b>Str</b> {format_number(stats.str)},
    <b>Dex</b> {format_number(stats.dex)},
    <b>Con</b> {format_number(stats.con)},
    <b>Int</b> {format_number(stats.int)},
    <b>Wis</b> {format_number(stats.wis)},
    <b>Cha</b> {format_number(stats.cha)}
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
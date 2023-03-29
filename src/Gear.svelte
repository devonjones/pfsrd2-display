<script>
	import {format_modifiers} from './monsterlib';

    function format_item(item) {
        // TODO: Links
        
        let item_text = item.name;
        item_text += format_modifiers(item)
        return item_text;
    }

    function format_gear(gear) {
        let gearlist = []
        for (let item of gear) {
            gearlist.push(format_item(item));
        }
        return gearlist.join(", ")
    }

    export let gear;
</script>

<gear>
    <b>Items</b> {format_gear(gear)}
</gear>

<style>
    b {
        color: #c8bf8f;
    }

    gear {
		padding: 1em;
        display: inline-block;
        text-align: left;
        padding: 0px;
        color: #ffffff;
        text-indent: -15px
	}
</style>